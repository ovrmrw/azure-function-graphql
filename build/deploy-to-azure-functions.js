const child = require('child_process');


[
  // 'git branch deploy-azure',
  'git checkout deploy-azure',
  'git rebase master',
  'npm run build:azure',
  'git add -A',
  'git commit -m "build:azure"',
  'git push origin deploy-azure',
  'git checkout master',
].forEach(command => {
  try {
    child.execSync(command);
  } catch (err) { }
});

// try {
//   child.execSync('git branch deploy-azure');
// } catch (err) { }


// try {
//   child.execSync('git checkout deploy-azure');

//   child.execSync('git rebase master');
//   child.execSync('npm run build:azure');
//   child.execSync('git add -A');
//   child.execSync('git commit -m "build:azure"');
//   child.execSync('git push origin deploy-azure');
// } catch (err) {
//   throw err;
// }

// child.execSync('git checkout master');
