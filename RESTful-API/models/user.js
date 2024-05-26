const mongoose = require('mongoose');
// Use the schema to define the constraints of a valid user
const userSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    }
}
   
)
// Based on the schema, we are now creating a model called user
// the model directly maps to the mongodb model
module.exports = mongoose.model('user', userSchema);