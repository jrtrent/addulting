var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SubjectSchema = new Schema({
    subject: {
        type: String,
        required: true
    },

    
});

var Subject = mongoose.model("Subject", SubjectSchema);


module.exports = Subject;