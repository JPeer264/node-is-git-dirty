import test from 'ava';
import path from 'path';
import fs from 'fs-extra';

import isGitClean from './';

const fixtures = path.join(process.cwd(), 'test', 'fixtures');

const folders = [
  'clean',
  'added',
  'modified',
  'untracked',
];

test.before('rename git folders', () => {
  folders.map(folder => fs.renameSync(path.join(fixtures, folder, 'git'), path.join(fixtures, folder, '.git')));
});

test.after.always('rename .git folders', () => {
  folders.map(folder => fs.renameSync(path.join(fixtures, folder, '.git'), path.join(fixtures, folder, 'git')));
});

const isGitMacro = (t, dir, assert) => {
  const isClean = isGitClean(path.join(fixtures, dir));

  t.is(isClean, assert);
};

test(isGitMacro, 'clean', true);
test(isGitMacro, 'modified', false);
test(isGitMacro, 'added', false);
test(isGitMacro, 'untracked', false);
test(isGitMacro, 'notexisting', false);
