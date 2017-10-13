import { Module } from '@nestjs/common';
import { FilterModule } from './filter/filter.module';
import { TaskModule } from './task/task.module';

@Module({
    modules: [TaskModule, FilterModule],
})
export class ApplicationModule {}