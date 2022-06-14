// require the library
const mongoose = require('mongoose');
// set up a schema
const taskSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    categ: {
        type: String,
        required: true
    },
    date: { 
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
});
// compile schema to model
const tasks = mongoose.model('Task', taskSchema);
// export the model
module.exports = tasks;