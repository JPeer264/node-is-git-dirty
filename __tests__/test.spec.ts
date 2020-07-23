import path from 'path';
import fs from 'fs-extra';
import { homedir } from 'os';
import tempDir from 'temp-dir';
import { v4 as uuidv4 } from 'uuid';

import isGitClean from '../index';

const fixtures = path.join(tempDir, 'sgc', uuidv4());
const localFixtures = path.join(process.cwd(), '__tests__', 'fixtures');
const folders = [
  'clean',
  'added',
  'modified',
  'untracked',
];

beforeAll(() => {
  fs.copySync(localFixtures, fixtures);
  folders.forEach((folder) => {
    fs.renameSync(path.join(fixtures, folder, 'git'), path.join(fixtures, folder, '.git'));
  });
});

afterAll(() => {
  fs.removeSync(fixtures);
});

it('should clean', () => {
  const isClean = isGitClean(path.join(fixtures, 'clean'));

  expect(isClean).toBe(false);
});

it('should modified', () => {
  const isClean = isGitClean(path.join(fixtures, 'modified'));

  expect(isClean).toBe(true);
});

it('should added', () => {
  const isClean = isGitClean(path.join(fixtures, 'added'));

  expect(isClean).toBe(true);
});

it('should untracked', () => {
  const isClean = isGitClean(path.join(fixtures, 'untracked'));

  expect(isClean).toBe(true);
});

it('should be non existing path', () => {
  const isClean = isGitClean(homedir());

  expect(isClean).toBe(null);
});
