import { useEffect, useState } from "react";

class Request<RequestData = any, ResponseData = any> {
    private url: string;
    private method: string = "GET";
    private dataState = useState<ResponseData | undefined>(undefined);
    private errorState = useState<Error | undefined>(undefined);
  
    public get data(): ResponseData | undefined {
      return this.dataState[0];
    }
  
    public get error(): Error | undefined {
      return this.errorState[0];
    }
  
    constructor(url: string, method: string = "GET") {
      this.url = url;
      this.method = method;
    }
  
    private setData(data: ResponseData): void {
      this.dataState[1](data);
      this.errorState[1](undefined);
    }
  
    private setError(error: Error): void {
      this.dataState[1](undefined);
      this.errorState[1](error);
    }
    
    public send(data: RequestData): void {
      fetch(this.url, { method: this.method, body: data ? JSON.stringify(data) : undefined } ).then(res => {
        if (res.ok) {
          res.json().then(data => this.setData(data));
        } else {
          throw new Error(res.statusText);
        }
      }).catch(err => this.setError(err));
    }
}

export type Response<RequestData, ResponseData> = {
  data: ResponseData | undefined;
  error: Error | string | undefined;
  refresh: (data: RequestData) => void;
}

export function useApiAction<RequestData, ResponseData>(data: RequestData, endpoint: string, method: string = "GET"): Response<RequestData, ResponseData> {
  const request = new Request<RequestData, ResponseData>("http://localhost:8080" + endpoint, method);
  
  useEffect(() => {
    request.send(data);
    console.log("Request sent");
  }, [data]);
  
  return {
      data: request.data,
      error: request.error,
      refresh: (data) => request.send(data),
  };
}

export default Request