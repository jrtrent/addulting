import mongoose from "mongoose";

const TodoSchema = new TodoSchema({
    user: {
        type: Schema.Types.ObjectId,
         ref: 'User'},
         
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
        required: true

    },

    recurring: {
        type: Boolean,
        required:true,
        default: false
    },

    isDone: {
        type: Boolean,
        required: true,
        default: false
    }

    
});

var Todo = mongoose.model("Todo", TodoSchema);

module.exports=Todo;