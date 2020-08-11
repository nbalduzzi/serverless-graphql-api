declare interface ExampleDTO {
    version: string;
}

declare interface ExampleResolverInterface {
    getVersion(): Promise<ExampleDTO>;
    getAdminVersion(): Promise<ExampleDTO>;
}

declare interface ExampleServiceInterface {
    getData(): Promise<ExampleDTO>;
}

declare interface ExampleRepositoryInterface {
    getData(): Promise<ExampleDTO>;
}
