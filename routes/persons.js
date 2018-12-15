var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/', (req, res)=>{
  db.Persons.find()
  .then((persons) =>{
    res.json(persons);
  })
  .catch((error)=>{
    res.send(error);
  })
})

//post to /
router.post('/', (req, res)=>{
  db.Persons.create(req.body)
  .then((newPerson)=>{
    res.status(201).json(newPerson)
  })
  .catch((error)=>{
    res.send(error)
  })
})

//post from addperson

//get req for single person by Id
router.get('/:personsId', (req, res)=>{
  db.Persons.findById(req.params.personsId)
  .then((foundPerson)=>{
    res.json(foundPerson)
  })
  .catch((error)=>{
    res.send(error)
  })
})

//update person
router.put('/:personsId', (req, res)=>{
  db.Persons.findOneAndUpdate({_id: req.params.personsId}, req.body, {new: true})
  .then((person) =>{
    res.json(person)
  })
  .catch((error)=>{
    res.send(error)
  })
})

//delete person
router.delete('/:personId', (req, res) =>{
  db.Persons.deleteOne({_id: req.params.personId})
  .then(() =>{
    res.json({message: "Person Deleted"})
  })
  .catch((error)=>{
    res.send(error)
  })
})

module.exports = router;
