module.exports = () => {
    require('../models/pet');
    const mongoose = require('mongoose');
    return {
        displayPets: (req, res) => {
            Pets.find({}).sort({pettype:1}).exec((err, data) =>{
                if(err){
                    console.log("There's an error");
                    res.json(err);
                }
                else {
                    console.log("Success");
                    res.json(data);
                }
            });
        },

        createPets: (req, res) => {
            let newPets = new Pets ({
                petname: req.body.petname, pettype: req.body.pettype, 
                description: req.body.description, skillone: req.body.skillone, 
                skilltwo: req.body.skilltwo, skillthree: req.body.skillthree
            });
            console.log(newPets);
            newPets.save((err, data) =>{
                if(err){
                    console.log("Saving is unsuccessful");
                    res.json(err);
                }
                else {
                    console.log("Successfully saved");
                    res.json(data);
                }
            })
        },

        findOnePet: (req, res) =>{
            Pets.findOne({_id: req.params.id}, (err, data) =>{
                if(err){
                    console.log("There's an error");
                    res.json(err);
                }
                else {
                    console.log('Success');
                    res.json(data);
                }
            })
            
            
        },

        editPet: (req, res) => {
            let updatePet = {
                petname: req.body.petname, pettype: req.body.pettype, 
                description: req.body.description, skillone: req.body.skillone, 
                skilltwo: req.body.skilltwo, skillthree: req.body.skillthree }

            Pets.updateOne({_id: req.params.id}, updatePet, {runValidators: true, context: 'query'}, (err, data) => {
                if(err){
                    console.log("There's an error");
                    res.json(err);
                }
                else {
                    console.log("Success");
                    res.json(data);
                }
            })

        },

        deletePet: (req, res) =>{
            Pets.deleteOne({_id: req.params.id}, (err, data) =>{
                if(err){
                    console.log("Deletion is unsuccessful");
                    res.json(err);
                }
                else {
                    console.log("Successfully deleted");
                    res.json(data);
                }
            })
        },
    
        updateVote: (req, res) => {
            Pets.findOne({_id: req.params.id} , function (err, data) {
                if (!err) {
                    data.likes = data.likes + req.body.voteVal;
                    data.save((err2, a)=> {
                        if (err) {
                            res.json(err2)
                        } else {
                            res.json(a);
                        }
                    })
                }
            });
    }
}
 
}