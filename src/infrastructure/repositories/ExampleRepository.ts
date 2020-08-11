import { ExampleEntity } from '../entities';

export class ExampleRepository implements ExampleRepositoryInterface {
    public async getData(): Promise<ExampleDTO> {
        return new Promise((resolve: Function, reject: Function): void =>
            ExampleEntity.get((err: Error, doc: Document) => (err ? reject(err) : resolve(doc))),
        );
    }
}
