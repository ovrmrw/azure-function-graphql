import { lodashAzureFunction } from './core';
import { auth0AuthenticationHook } from '../lib/auth';


export const af = auth0AuthenticationHook(lodashAzureFunction);
