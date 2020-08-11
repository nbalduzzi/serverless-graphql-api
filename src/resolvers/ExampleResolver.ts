import 'reflect-metadata';
import { Resolver, Authorized, Query } from 'type-graphql';

import { Example } from '../types';
import { ExampleService } from '../services';

@Resolver(Example)
export class ExampleResolver implements ExampleResolverInterface {
    private service: ExampleServiceInterface;

    constructor() {
        this.service = new ExampleService();
    }

    @Authorized(['REGISTERED_USER'])
    @Query(() => Example)
    public async getVersion(): Promise<ExampleDTO> {
        return this.service.getData();
    }

    @Authorized(['ADMIN'])
    @Query(() => Example)
    public async getAdminVersion(): Promise<ExampleDTO> {
        return this.service.getData();
    }
}
