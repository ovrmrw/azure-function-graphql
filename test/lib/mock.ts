import { AFContext, AFRequest } from '../../types';


export const mockContext: AFContext = {
  res: {},
  done: () => { },
  log: (message: any, ...params: any[]) => {
    if (params && params.length > 0) {
      console.log(message, params);
    } else {
      console.log(message);
    }
  },
};


export const mockRequest: AFRequest = {
  body: {},
  query: {},
};
