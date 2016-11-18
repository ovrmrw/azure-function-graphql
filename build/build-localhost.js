const fs = require('fs-extra');
const child = require('child_process');

const root = 'localhost';


fs.emptyDirSync(root);

child.execSync('tsc --outDir ' + root);


const dirList = [
  '.env',
  'cloudant',
  'createCustomToken',
  'graphql',
  'httptriggernodejs2',
  'lodash',  
].forEach(dir => {
  fs.copy(dir, root + '/' + dir);
});
