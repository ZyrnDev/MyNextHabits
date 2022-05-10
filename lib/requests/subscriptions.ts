import { Response, useApiAction } from '@lib/request'

type GetSubscriptionRequestData = { id: number, userId?: number, habitId?: number };
type GetSubscriptionResponseData = Record<string, any>;
type GetSubscriptionResponse = Response<GetSubscriptionRequestData, GetSubscriptionResponseData>;
export const useGetSubscriptions: (data: GetSubscriptionRequestData) => GetSubscriptionResponse = (data) => {
    return useApiAction(data, '/subscriptions/find', 'POST', true);
}

type CreateSubscriptionRequestData = { userId: number, habitId: number, endpoint: string, auth: string, p256dh: string };
type CreateSubscriptionResponseData = Record<string, any>;
type CreateSubscriptionResponse = Response<CreateSubscriptionRequestData, CreateSubscriptionResponseData>;
export const useCreateSubscription: (data: CreateSubscriptionRequestData) => CreateSubscriptionResponse = (data) => {
    return useApiAction<CreateSubscriptionRequestData, CreateSubscriptionResponseData>(data, "/subscriptions/create", "POST");
}

type DeleteSubscriptionRequestData = { id: number };
type DeleteSubscriptionResponseData = Record<string, any>;
type DeleteSubscriptionResponse = Response<DeleteSubscriptionRequestData, DeleteSubscriptionResponseData>;
export const useDeleteSubscription: (data: DeleteSubscriptionRequestData) => DeleteSubscriptionResponse = (data) => {
    return useApiAction<DeleteSubscriptionRequestData, DeleteSubscriptionResponseData>(data, "/subscriptions/delete", "POST");
}

type UpdateSubscriptionRequestData = { id: number, userId?: number, habitId?: number, endpoint?: string, auth?: string, p256dh?: string };
type UpdateSubscriptionResponseData = Record<string, any>;
type UpdateSubscriptionResponse = Response<UpdateSubscriptionRequestData, UpdateSubscriptionResponseData>;
export const useUpdateSubscription: (data: UpdateSubscriptionRequestData) => UpdateSubscriptionResponse = (data) => {
    return useApiAction<UpdateSubscriptionRequestData, UpdateSubscriptionResponseData>(data, "/subscriptions/update", "POST");
}