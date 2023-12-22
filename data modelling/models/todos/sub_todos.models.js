import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema({
    content: {
        type: 'string',
        required: true,
    },
    completed: {
        type: 'boolean',
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

export const subTodo = mongoose.model('Todo', subTodoSchema);