import { AzureFunction } from '../types';
import { CloudantController, DocumentBase, SearchResult } from './cloudant-controller'


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
    const cc = new CloudantController();
    const DB = 'mydb' // Database Name which you created.

    console.log('req:', req);


    const result = await cc.searchDocument<SearchResult<MyDoc>>(DB, 'mydbdoc', 'mydbsearch', 'テキスト')
    if (result) {
      result.rows.forEach(row => console.log(row.fields))
    }

    context.res = {
      status: 200,
      body: result,
    };
    context.done();
  };
