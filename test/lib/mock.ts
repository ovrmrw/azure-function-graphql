import { AFContext, AFRequest } from '../../types';


export const mockContext: AFContext = {
  res: {},
  done: () => { },
  log: (message?: any, ...params: any[]) => console.log(message, params),
};


export const mockRequest: AFRequest = {
  body: {},
  query: {},
};
