import { Response, useApiAction } from '@lib/request'

type GetUserRequestData = { id: number, nickname: string };
type GetUserResponseData = Record<string, any>;
type GetUserResponse = Response<GetUserRequestData, GetUserResponseData>;
export const useGetUsers: (data: GetUserRequestData) => GetUserResponse = (data) => {
    return useApiAction(data, '/users/find', 'POST', true);
}


type CreateUserRequestData = { nickname: string };
type CreateUserResponseData = Record<string, any>;
type CreateUserResponse = Response<CreateUserRequestData, CreateUserResponseData>;
export const useCreateUser: (data: CreateUserRequestData) => CreateUserResponse = (data) => {
    return useApiAction<CreateUserRequestData, CreateUserResponseData>(data, "/users/create", "POST");
}

type DeleteUserRequestData = { id: number };
type DeleteUserResponseData = Record<string, any>;
type DeleteUserResponse = Response<DeleteUserRequestData, DeleteUserResponseData>;
export const useDeleteUser: (data: DeleteUserRequestData) => DeleteUserResponse = (data) => {
    return useApiAction<DeleteUserRequestData, DeleteUserResponseData>(data, "/users/delete", "POST");
}

type UpdateUserRequestData = { id: number, nickname: string };
type UpdateUserResponseData = Record<string, any>;
type UpdateUserResponse = Response<UpdateUserRequestData, UpdateUserResponseData>;
export const useUpdateUser: (data: UpdateUserRequestData) => UpdateUserResponse = (data) => {
    return useApiAction<UpdateUserRequestData, UpdateUserResponseData>(data, "/users/update", "POST");
}