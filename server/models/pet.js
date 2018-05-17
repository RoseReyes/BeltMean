require('../config/mongoose');
const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
module.exports = (() => {
    const PetSchema = new mongoose.Schema ({
    petname: {type: String, required: [true, "The pet must have a name"],
             minlength:[3, "Pet name must be longer than 3 characters"],
             unique:[true,"Pet's name already exists"],
             dropDups: true},
    pettype: {type: String, required: [true, "The pet must have a type"],
              minlength:[3, "Pet type must be longer than 3 characters"]},
    description: {type: String, required: [true, "The pet must have a description"],
                  minlength:[3, "Pet description must be longer than 3 characters"],},
    skillone: {type:String, default: ''},
    skilltwo: {type:String, default:''},
    skillthree: {type:String, default: ''},
    likes: {type: Number, default: 0}
}, {timestamps:true});
Pets = mongoose.model('Pets', PetSchema);
PetSchema.plugin(uniqueValidator, { message: 'The name {VALUE} already exists.' });
})();