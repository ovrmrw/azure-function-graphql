import { graphql } from 'graphql';

// import { firebaseApp } from './firebase-initializer';
import { executableSchema, executableSchema2, createLoaders, Context } from './data';

import { passedTimeMessage, logResponse } from '../lib/utils';
import { AzureFunction } from '../types';


export const graphqlAzureFunction: AzureFunction =
  async (context, req) => {
    const startTime = new Date().getTime();
    const query: string = req.body.query ? req.body.query : `
      {
        users {
          id
          name
          hobby {
            id
            name
          }
          follow {
            id
            name
            follow {
              id
              name
            }
          }
        }
      }
    `;
    // const query: string = (event.body && event.body.query) ? event.body.query : `
    //   {
    //     test
    //   }
    // `;

    const variables: {} = req.body.variables ? req.body.variables : null;

    const contextValue: Context = {
      loaders: createLoaders()
    };

    console.log('query:', query);
    console.log('variables:', variables);
    // console.log('contextValue:', contextValue);

    try {
      const result = await graphql(executableSchema, query, null, contextValue, variables);
      context.res = {
        status: 200,
        body: { result }
      };
    } catch (error) {
      context.res = {
        status: 400,
        body: { error }
      };
    }

    context.log(...logResponse(context));
    context.log(passedTimeMessage(startTime));
    context.done();
    // return;
  };
