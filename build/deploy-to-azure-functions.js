const child = require('child_process');


// try {
//     child.execSync('git checkout deploy-azure');
// } catch (err) {
//     console.error('Commit file changes before deploy.');
// }

const commands = [
  'git add -A',
  'git commit -m "before deploy"',
  'git branch deploy-azure',
  'git checkout deploy-azure',
  'git rebase master',
  'npm run build:azure',
  'git add -A',
  'git commit -m "build:azure"',
  'git push origin deploy-azure -f',
  'git checkout master',
  'git branch -D deploy-azure',
];

commands.forEach(command => {
  console.log('='.repeat(20), command);
  try {
    const result = child.execSync(command).toString();
    console.log('result:', result);
  } catch (err) {
    console.error('error:', err.Error);
  }
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
