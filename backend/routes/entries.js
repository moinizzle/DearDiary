const router = require('express').Router();
let Entry = require('../models/entry.model');


// /entries
router.route('/').get(function(req, res) {
    Entry.find()
    .then(function(entries){res.json(entries)})
    .catch(function(err){res.status(400).json('Error: ' + err )})

});

// /entries/add
router.route('/add').post(function(req, res){
    const author = req.body.author;
    const entry = req.body.entry;

    const newEntry = new Entry({
        author,
        entry
    });

    // save to database

    newEntry.save() 
    .then(function(){res.json('Author added to the database!')})
    .catch(function(err){res.status(400).json('error '+ err)})
});


router.route('/:id').get(function(req, res){
    // search model
    Entry.findById(req.params.id)
    .then(function(entry){res.json(entry);})
    .catch(function(err){res.status(400).json('Error: ' + err )})
});


router.route('/:id').delete(function(req, res){
    // search model (db)
    Entry.findByIdAndDelete(req.params.id)
    .then(function(entry){res.json(entry + 'deleted')})
    .catch(function(err){res.status(400).json('Error: ' + err )})
});


router.route('update/:id').post(function(req, res){

    Entry.findById(req.params.id)
    .then(function(exercise){
        exercise.author = req.body.author;
        exercise.entry = req.body.entry;
    
        // save changes
        exercise.save()
        .then(function(){res.json('Database updated!')}
        .catch(function(err){res.status(400).json('Error: ' + err )})
    )})

    .catch(function(err){res.status(400).json('Error: ' + err )})
});

module.exports= router;
