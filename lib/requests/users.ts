import { Response, useApiAction } from '@lib/request'

type CreateUserRequestData = { nickname: string };
type CreateUserResponseData = Record<string, any>;
type CreateUserResponse = Response<CreateUserRequestData, CreateUserResponseData>;

export const useCreateUser: (data: CreateUserRequestData) => CreateUserResponse = (data) => {
    return useApiAction<CreateUserRequestData, CreateUserResponseData>(data, "/users/new", "POST");
}