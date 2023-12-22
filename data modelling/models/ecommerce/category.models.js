import mongoose from 'mongoose';

const catergorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
    }
},{})

export const Category = new mongoose.model('Category', catergorySchema);