import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    qty:  {type: Number, required: true},
    description: {type: String, required: true}
});