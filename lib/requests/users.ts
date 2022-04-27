import { Response, useApiAction } from '@lib/request'

type CreateUserRequestData = { nickname: string };
type CreateUserResponseData = Record<string, any>;
type CreateUserResponse = Response<CreateUserRequestData, CreateUserResponseData>;

export const useCreateUser: (data: CreateUserRequestData) => CreateUserResponse = (data) => {
    return useApiAction<CreateUserRequestData, CreateUserResponseData>(data, "/users/new", "POST");
}

type DeleteUserRequestData = { id: number };
type DeleteUserResponseData = Record<string, any>;
type DeleteUserResponse = Response<DeleteUserRequestData, DeleteUserResponseData>;
export const useDeleteUser: (data: DeleteUserRequestData) => DeleteUserResponse = (data) => {
    return useApiAction<DeleteUserRequestData, DeleteUserResponseData>(data, "/users/delete", "POST");
}