import { ITask, Task } from './task.model'

import { Component } from '@nestjs/common'

@Component()
export class TaskService {
    
    public async getAll() {
        return (await Task).find({});
    }

    public async getById(id: string):Promise<ITask> {
        return await Task.findById(id);
    }

    public async create(task: ITask): Promise<ITask> {
        return await Task.create(task);
    }

    public async update(id: string, task: ITask): Promise<ITask> {
        return await Task.findByIdAndUpdate(id, task, {new: true})
    }

    public async delete(id: string): Promise<ITask>{
        return await Task.findByIdAndRemove(id)
    }

    public async deleteCompleted(tasks:Array<ITask>): Promise<void>{
        let tasksToDelete:Array<string> = new Array<string>();
        for(let task of tasks){
            tasksToDelete.push(task.id);
        }
        return await Task.remove({_id: {$in: tasksToDelete}});
    }
}