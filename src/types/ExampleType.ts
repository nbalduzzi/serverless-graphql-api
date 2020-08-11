import { ObjectType, Field } from 'type-graphql';

@ObjectType({ description: 'Example Type' })
export class Example {
    @Field()
    version: string;
}
