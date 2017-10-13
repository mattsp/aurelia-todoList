import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
    components: [TaskService],
    controllers: [TaskController],
    modules: []
})
export class TaskModule { }