import mongoose from 'mongoose';
import { User } from './user.models';

const todoSchema = new mongoose.Schema({
    content:{
        type: 'string',
        required: true,
    },
    complete:{
        type: 'boolean',
        default: false,
    },
    createdBy:{
        type: mongoose.Schema.Type.ObjectId,
        ref: "User"
    },
    subTodos:[
        {
            type: mongoose.Schema.Type.ObjectId,
            ref : "subTodo"
        }
    ]
},
    {timestamps: true}
    );

export const Todo = mongoose.model('Todo', todoSchema);