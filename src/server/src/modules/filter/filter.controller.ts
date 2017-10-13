import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';

import { FilterService } from './filter.service';
import { IFilter } from './filter.model'
import { Response } from 'express';

@Controller('filters')
export class FilterController {

    constructor(private filterService: FilterService) { }

    @Get()
    public async getAll( @Res() res: Response) {
        const filters = await this.filterService.getAll();
        res.status(HttpStatus.OK).json(filters);
    }

    @Get('/:id')
    public async getById( @Res() res, @Param('id') id) {
        const filter: IFilter = await this.filterService.getById(id);
        res.status(HttpStatus.OK).json(filter);
    }

    @Post()
    public async create( @Res() res: Response, @Body() filter: IFilter) {
        const newFilter = await this.filterService.create(filter);
        res.status(HttpStatus.CREATED).json(newFilter);
    }

    @Put(':id')
    public async update( @Res() res: Response, @Param('id') id: string, @Body() filter: IFilter) {
        const filterUpdated = await this.filterService.update(id, filter);
        res.status(HttpStatus.OK).send(filterUpdated);
    }

    @Delete(':id')
    public async delete( @Res() res: Response, @Param('id') id: string) {
        const filterDeleted = await this.filterService.delete(id);
        res.status(HttpStatus.OK).send(filterDeleted);
    }
}