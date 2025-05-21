export interface IUser {
    username: string;
    token: string;
    isActivated: boolean;
    id: string;

    postId: string;
    photo: string;
    extFile: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    storageType: string;
}