import { ResolverData } from 'type-graphql';
import { v4 } from 'uuid';

export class AuthorizerUtil {
    public static async validate({ context }: ResolverData<CustomContext>, roles: string[]): Promise<boolean> {
        if (context.user) {
            if (roles.includes('ADMIN')) {
                return AuthorizerUtil.haveAccess(context.user);
            } else if (roles.includes('REGISTERED_USER') || roles.includes('GUEST')) {
                return AuthorizerUtil.haveAccess(context.user);
            } else {
                return false;
            }
        }

        return false;
    }

    public static async handleContext(context: CustomContext): Promise<CustomContext> {
        const accessToken: string | undefined = AuthorizerUtil.getAccessTokenFromHeader(context.headers);

        if (accessToken) {
            try {
                return { ...context, user: { id: v4(), tokenType: 'access', accessToken } };
            } catch (e) {
                console.error(e);
            }
        }

        return context;
    }

    private static getAccessTokenFromHeader(headers: { [key: string]: string }): string | undefined {
        const authorizationHeaders: string = headers['Authorization'] || headers['authorization'];
        return (authorizationHeaders && authorizationHeaders.split(' ')[1]) || undefined;
    }

    private static haveAccess(user: AuthorizedUserDTO): boolean {
        return user && ['access'].includes(user.tokenType);
    }
}
