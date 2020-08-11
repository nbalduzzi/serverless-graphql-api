declare const enum UserPermission {
    ADMIN = 'ADMIN',
}

declare interface AuthResponseDTO {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    success: boolean;
}

declare interface AuthorizedUserDTO {
    id: string;
    accessToken: string;
    tokenType: string;
}

declare interface CustomContext {
    event: { [key: string]: any };
    context: { [key: string]: any };
    headers: { [key: string]: string };
    functionName: string;
    user?: AuthorizedUserDTO;
}

declare interface UserPermissionDTO {
    userId: string;
    role: string;
}

declare interface BackofficeServiceInterface {
    isAdmin(userId: string): Promise<boolean>;
}

declare interface BackofficeRepositoryInterface {
    getUserPermissions(userId: string): Promise<UserPermissionDTO | null>;
}
