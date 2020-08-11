import { gt } from 'semver';

import { ExampleRepository } from '../infrastructure/repositories';

export class ExampleService implements ExampleServiceInterface {
    private repository: ExampleRepositoryInterface;

    constructor(repository?: ExampleRepositoryInterface) {
        this.repository = repository || new ExampleRepository();
    }

    public async getData(): Promise<ExampleDTO> {
        return { version: '1.0' };
    }
}
