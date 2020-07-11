const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4444;

app.use(cors());
app.use(express.json());


//const uri = process.env.ATLAS_URI;

const uri = "mongodb+srv://admin:admin@cluster0.qgcva.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority"
// connection the process URI to database

mongoose.connect(uri || process.env.MONGODB_URI, { 
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

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('build'))
}

app.listen(port, function() {
    console.log(`Server is running: ${port}`);
});