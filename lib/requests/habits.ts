import { Response, useApiAction } from '@lib/request'
export type Habit = { id: number, name: string, description: string, authorId: number }

type GetHabitRequestData = Habit;
type GetHabitResponseData = Record<string, any>;
type GetHabitResponse = Response<GetHabitRequestData, GetHabitResponseData>;
export const useGetHabits: (data: GetHabitRequestData) => GetHabitResponse = (data) => {
    return useApiAction(data, '/habits/find', 'POST', true);
}

type CreateHabitRequestData = Omit<Habit, 'id'>;
type CreateHabitResponseData = Record<string, any>;
type CreateHabitResponse = Response<CreateHabitRequestData, CreateHabitResponseData>;
export const useCreateHabit: (data: CreateHabitRequestData) => CreateHabitResponse = (data) => {
    return useApiAction<CreateHabitRequestData, CreateHabitResponseData>(data, "/habits/create", "POST");
}

type DeleteHabitRequestData = Pick<Habit, 'id'>;
type DeleteHabitResponseData = Record<string, any>;
type DeleteHabitResponse = Response<DeleteHabitRequestData, DeleteHabitResponseData>;
export const useDeleteHabit: (data: DeleteHabitRequestData) => DeleteHabitResponse = (data) => {
    return useApiAction<DeleteHabitRequestData, DeleteHabitResponseData>(data, "/habits/delete", "POST");
}

type UpdateHabitRequestData = Habit;
type UpdateHabitResponseData = Record<string, any>;
type UpdateHabitResponse = Response<UpdateHabitRequestData, UpdateHabitResponseData>;
export const useUpdateHabit: (data: UpdateHabitRequestData) => UpdateHabitResponse = (data) => {
    return useApiAction<UpdateHabitRequestData, UpdateHabitResponseData>(data, "/habits/update", "POST");
}