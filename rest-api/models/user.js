const mongoose = require('mongoose');
// Please note the cases of the data types!
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },    
    surname: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now(),
    }

});
// Once we have a schema, we can create a model based on it..

//To create the ORM mapping to Mongoose DB ...
module.exports = mongoose.model('Users', userSchema); // 


