const child = require('child_process');


const check = child.execSync('git add -n -A').toString();
if (check) {
  console.log('"git add -n -A" ==>', check);
  console.error('** Commit file changes before deploy! **');
  return;
}


const commands = [
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
