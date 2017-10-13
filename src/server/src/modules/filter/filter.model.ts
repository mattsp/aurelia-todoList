import { Document, Model, Schema, model } from 'mongoose'

import { IFilterBaseModel } from 'aurelia-todolist-models';

export interface IFilter extends IFilterBaseModel, Document {
}

interface IFilterModel extends Model<IFilter> { }

const filterSchema = new Schema({
    name: { type: String, required: 'Field {PATH} is required' },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

filterSchema.virtual('id');
filterSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        ret.id = ret._id.toString();
        delete ret._id;
    },
});

export const Filter = model<IFilter>('filter', filterSchema) as IFilterModel