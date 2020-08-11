import { ApolloServer } from 'apollo-server-lambda';
import { buildSchemaSync } from 'type-graphql';

import { AuthorizerUtil } from './utils';
import { ExampleResolver } from './resolvers';

const server: ApolloServer = new ApolloServer({
    schema: buildSchemaSync({
        authChecker: AuthorizerUtil.validate,
        resolvers: [ExampleResolver],
    }),
    introspection: process.env.NODE_ENV !== 'production',
    playground: true,
    context: async ({ event, context }: CustomContext): Promise<CustomContext> =>
        AuthorizerUtil.handleContext({
            event,
            context,
            headers: event.headers,
            functionName: context.functionName,
        }),
});

exports.handler = server.createHandler();
