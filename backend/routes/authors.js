const router = require('express').Router();
let Author = require('../models/author.model'); // user model 


// /authors/
router.route('/').get(function(req, res) {
    // search the database
    Author.find()
    .then(function(users){res.json(users)})
    .catch(function(err){res.status(400).json('Error: ' + err )})
});

// /authors/add/
router.route('/add').post(function(req, res){
    
    const author = req.body.author;
    
    const newAuthor = new Author({ author });

    newAuthor.save() 
    .then(function(){res.json('Author added to the database!')})
    .catch(function(err){res.status(400).json('Error: '+ err)})

});

module.exports = router