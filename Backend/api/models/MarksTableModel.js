var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarkSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter name of the task'
    },

    maths: {
        type: String,
        required: 'Please  enter maths marks'
    },

    science: {
        type: String,
        required: 'Please enter science marks'
    },

    english: {
        type: String,
        required: 'Please enter english marks'
    },

    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Marks', MarkSchema);