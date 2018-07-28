var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
        type: String,
        required: true
      }
      

    
});

var category = mongoose.model("category", categorySchema);


module.exports = category;