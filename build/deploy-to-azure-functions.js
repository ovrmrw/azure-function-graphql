const child = require('child_process');


try {
  child.execSync('git branch deploy-azure');
} catch (err) { }


try {
  child.execSync('git checkout deploy-azure');
  child.execSync('git rebase master');
  child.execSync('npm run build:azure');
  child.execSync('git add -A');
  child.execSync('git commit -m "build:azure"');
  child.execSync('git push origin deploy-azure');
  child.execSync('git checkout master');
} catch (err) {
  throw err;
}
