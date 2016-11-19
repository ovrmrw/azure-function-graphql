import { CloudantController, DocumentBase, SearchResult } from './cloudant-controller'

import { passedTimeMessage, logResponse } from '../lib/utils';
import { AzureFunction } from '../types';


interface Alice {
  crazy: boolean
  a: number
  b: string
}

interface MyDoc {
  name: string
  desc: string
}


export const cloudantAzureFunction: AzureFunction =
  async (context, req) => {
    const startTime = new Date().getTime();
    const cc = new CloudantController();
    const DB = 'mydb' // Database Name which you created.

    const keyword = req.query.keyword || req.body.keyword || 'テキスト'; 

    try {
      const result = await cc.searchDocument<SearchResult<MyDoc>>(DB, 'mydbdoc', 'mydbsearch', keyword)
      if (result) {
        result.rows.forEach(row => console.log(row.fields))
      }

      context.res = {
        status: 200,
        body: { result },
      };
    } catch (error) {
      context.res = {
        status: 400,
        body: { error },
      };
    }

    context.log(...logResponse(context));
    context.log(passedTimeMessage(startTime));
    context.done();
    // return context;
  };
