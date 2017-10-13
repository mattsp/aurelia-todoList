import { FilterController } from './filter.controller';
import { FilterService } from './filter.service';
import { Module } from '@nestjs/common';

@Module({
    components: [FilterService],
    controllers: [FilterController],
    modules: []
})
export class FilterModule { }