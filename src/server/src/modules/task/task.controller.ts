import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';

import { ITask } from './task.model'
import { Response } from 'express';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {

    constructor(private taskService: TaskService) { }

    @Get()
    public async getAll( @Res() res: Response) {
        const tasks = await this.taskService.getAll();
        res.status(HttpStatus.OK).json(tasks);
    }

    @Get('/:id')
    public async getById( @Res() res, @Param('id') id) {
        const task: ITask = await this.taskService.getById(id);
        res.status(HttpStatus.OK).json(task);
    }

    @Post()
    public async create( @Res() res: Response, @Body() task: ITask) {
        const newTask = await this.taskService.create(task);
        res.status(HttpStatus.CREATED).json(newTask);
    }

    @Put(':id')
    public async update( @Res() res: Response, @Param('id') id: string, @Body() task: ITask) {
        const taskUpdated = await this.taskService.update(id, task);
        res.status(HttpStatus.OK).send(taskUpdated);
    }

    @Delete(':id')
    public async delete( @Res() res: Response, @Param('id') id: string) {
        const taskDeleted = await this.taskService.delete(id);
        res.status(HttpStatus.OK).send(taskDeleted);
    }

    @Post('delete/completed')
    public async deleteCompleted(@Res() res: Response, @Body() tasks: Array<ITask>) {
        await this.taskService.deleteCompleted(tasks);
        res.status(HttpStatus.OK).send();
    }
}