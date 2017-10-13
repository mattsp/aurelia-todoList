import { Filter, IFilter } from './filter.model'

import { Component } from '@nestjs/common'

@Component()
export class FilterService {
    
    public async getAll() {
        return (await Filter).find({});
    }

    public async getById(id: string):Promise<IFilter> {
        return await Filter.findById(id);
    }

    public async create(filter: IFilter): Promise<IFilter> {
        return await Filter.create(filter);
    }

    public async update(id: string, filter: IFilter): Promise<IFilter> {
        return await Filter.findByIdAndUpdate(id, filter, {new: true})
    }

    public async delete(id: string): Promise<IFilter>{
        return await Filter.findByIdAndRemove(id)
    }
}