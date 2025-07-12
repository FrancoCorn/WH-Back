import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class SupermarketService {
    constructor(private prismaService: PrismaService) { }

    async getAll(includeSchedule: boolean = false) {
        return this.prismaService.supermarket.findMany({
            include: {
                schedules: includeSchedule ? {
                    select: {
                        day: true,
                        open: true,
                        close: true,
                    },
                } : false
            },
        });
    }

    async getById(id: number, includeSchedule: boolean = false) {
        return this.prismaService.supermarket.findUnique({
            where: { id },
            include: {
                schedules: includeSchedule ? {
                    select: {
                        day: true,
                        open: true,
                        close: true,
                    },
                } : false
            }
        });
    }

    async getBySearch(search: string, includeSchedule: boolean = false) {
        return this.prismaService.supermarket.findMany({
            where: {
                OR: [
                    { name: { startsWith: search, mode: 'insensitive' } },
                ],
            },
            include: {
                schedules: includeSchedule ? {
                    select: {
                        day: true,
                        open: true,
                        close: true,
                    },
                } : false
            }
        });
    }

    // Calculates the distance between the user's location and each supermarket
    async getByLocation(latitude: number, longitude: number, includeSchedule: boolean = false) {
        const supermarkets = await this.prismaService.supermarket.findMany({
            include: {
                schedules: includeSchedule ? {
                    select: {
                        day: true,
                        open: true,
                        close: true,
                    },
                } : false
            }
        });
        const closests = supermarkets.map((supermarket) => {
            const distance = Math.sqrt(
                Math.pow(supermarket.latitude - latitude, 2) +
                Math.pow(supermarket.longitude - longitude, 2),
            );
            return { ...supermarket, distance };
        });
        closests.sort((a, b) => a.distance - b.distance);
        return closests;
    }

    async getBySchedule(day: number, hourStart: number, hourEnd: number, includeSchedule: boolean = false) {
        const supermarketObjects = await this.prismaService.supermarket.findMany({
            where: {
                schedules: {
                    some: {
                        AND: [
                            { day },
                            { open: { lte: hourStart } },
                            { close: { gte: hourEnd } },
                        ],
                    },
                },
            },
            include: {
                schedules: includeSchedule ? {
                    select: {
                        day: true,
                        open: true,
                        close: true,
                    },
                } : false
            }
        });
        return supermarketObjects
    }

    async getMapData(supermarketId: number): Promise<{ vertices: any[], edges: any[] }> {
        const verticesPromise = this.getVertices(supermarketId);
        const pathsPromise = this.getPaths(supermarketId);
        const [vertices, paths] = await Promise.all([verticesPromise, pathsPromise]);
        return { vertices, edges: paths };
    }

    private async getVertices(supermarketId: number) {
        return this.prismaService.supermarketVertices.findMany({
            where: {
                supermarketId
            }
        });
    }

    private async getPaths(supermarketId: number) {
        return this.prismaService.supermarketPaths.findMany({
            where: {
                vertex_from: {
                    supermarketId
                },
                vertex_to: {
                    supermarketId
                }
            }
        });
    }
}
