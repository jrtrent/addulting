var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const dailytaskSchema = new Schema({
         
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
       required:true
  
      },

    priority: {
        type: Number,
        required: true

    },

    estTime: {
        type:Number,
         required: false    

    },

    recurring: {
        type: Boolean,
        default: false
    },

    isDone: {
        type: Boolean,
        default: false
    }

    
});

const dailytask = mongoose.model("dailytask", dailytaskSchema);

module.exports=dailytask;