import { Document, Model, Schema, model } from 'mongoose'

import { ITaskBaseModel } from 'aurelia-todolist-models';

export interface ITask extends ITaskBaseModel, Document {
}

interface ITaskModel extends Model<ITask> { }

const taskSchema = new Schema({
    title: { type: String, required: 'Field {PATH} is required' },
    description: { type: String},
    completed: { type: Boolean, required: 'Field {PATH} is required' }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

taskSchema.virtual('id');
taskSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        ret.id = ret._id.toString();
        delete ret._id;
    },
});

export const Task = model<ITask>('task', taskSchema) as ITaskModel