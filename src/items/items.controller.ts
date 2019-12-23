import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')

export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {}

    @Get(':id') 
    async findOne(@Param('id') id) : Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Post()
    async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id ) {
       return this.itemsService.update(id, updateItemDto)
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<Item> {
        return  this.itemsService.delete(id);
      }


}
