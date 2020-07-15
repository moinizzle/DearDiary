const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = 4444 || process.env.PORT;

app.use(cors());
app.use(express.json());


//const uri = process.env.ATLAS_URI;

const uri = process.env.MONGODB_URI;
// connection the process URI to database

mongoose.connect(uri, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
console.log("MongoDB has successfully connected!");
});

// load routers
const authorsRouter = require('./routes/authors')
const entriesRouter = require('./routes/entries')

// setting up the backend urls
app.use('/entries/', entriesRouter);
app.use('/authors/', authorsRouter);

// if (process.env.NODE_ENV === 'production'){
//     app.use(express.static('build'))
// }
if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  } 

app.listen(process.env.PORT || 4444, () =>{
    console.log(`Server is running:`);})
    .on('error', err => {
        console.log(`Error Code: ${err.code}`);});