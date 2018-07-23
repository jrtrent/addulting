var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const TaskSchema = new Schema({
   // user: {
    //   type: Schema.Types.ObjectId,
       //  ref: 'User'},

   subject: {
      type: String,
     required:true

    },
         
    title: {
        type: String,
        required: true
    },

    priority: {
        type: String,
        required: true

    },

    estTime: {
        type:Number,
         required: false    

    },

    recurring: {
        type: String,
        // required:true,
        default: false
    },

    isDone: {
        type: Boolean,
        required: false,
        default: false
    }

    
});

const Task = mongoose.model("Task", TaskSchema);

module.exports=Task;