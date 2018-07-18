var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SubjectSchema = new Schema({
    topic: {
        type: String,
        required: true
    },

    
});

var Subject = mongoose.model("Subject", SubjectSchema);


module.exports = Subject;