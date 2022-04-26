import { Response, useApiAction } from '@lib/request'

type PingRequestData = undefined;
type PingResponseData = Record<string, any>;
type PingResponse = Response<PingRequestData, PingResponseData>;

export const usePing: (data?: PingRequestData) => PingResponse = (data) => {
    return useApiAction<PingRequestData, PingResponseData>(data, "/ping");
};