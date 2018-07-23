var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SubjectSchema = new Schema({
    title: {
        type: String,
        required: true,
        _id: true
        
    },

    
});

var Subject = mongoose.model("Subject", SubjectSchema);


module.exports = Subject;