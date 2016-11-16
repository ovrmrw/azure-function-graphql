export interface AFContext {
  res: {
    status?: number;
    body?: any;
  };
  done: () => void;
}


export interface AFRequest {
  body: any;
  query: any;
}


export interface AzureFunction {
  (context: AFContext, req: AFRequest): Promise<void>;
}


export interface NestedAzureFunction {
  (callback: AzureFunction): AzureFunction;
}
