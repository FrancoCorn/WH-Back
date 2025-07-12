import { Controller, Get, Param, ParseFloatPipe, ParseIntPipe, Query } from '@nestjs/common';
import { SupermarketService } from './supermarket.service';

@Controller('supermarket')
export class SupermarketController {
    constructor(private supermarketService: SupermarketService) { }

    @Get()
    async getAll() {
        return this.supermarketService.getAll(true);
    }

    @Get('id/:id')
    async getById(@Param('id', ParseIntPipe) id: number) {
        return this.supermarketService.getById(id, true);
    }

    @Get('search')
    async getBySearch(@Query('query') search: string) {
        return this.supermarketService.getBySearch(search, true);
    }

    @Get('location')
    async getByLocation(
        @Query('latitude', ParseFloatPipe) latitude: number,
        @Query('longitude', ParseFloatPipe) longitude: number,
    ) {
        return this.supermarketService.getByLocation(latitude, longitude, true);
    }

    @Get('schedule')
    async getBySchedule(
        @Query('day', ParseIntPipe) day: number,
        @Query('hourStart', ParseIntPipe) hourStart: number,
        @Query('hourEnd', ParseIntPipe) hourEnd: number,
    ) {
        return this.supermarketService.getBySchedule(day, hourStart, hourEnd, true);
    }

    @Get('map/:supermarketId')
    async getVerticesBySupermarket(@Param('supermarketId', ParseIntPipe) supermarketId: number): Promise<{ vertices: any[], edges: any[] }> {
        return this.supermarketService.getMapData(supermarketId);
    }
}
