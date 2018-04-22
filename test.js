import test from 'ava';
import path from 'path';
import fs from 'fs-extra';
import { homedir } from 'os';

import isGitClean from './index';

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

isGitMacro.title = (providedTitle, dir) => `${providedTitle} ${dir}`;

test(isGitMacro, 'clean', false);
test(isGitMacro, 'modified', true);
test(isGitMacro, 'added', true);
test(isGitMacro, 'untracked', true);

test('non existing path', (t) => {
  const isClean = isGitClean(homedir());

  t.is(isClean, null);
});
