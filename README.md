# is-git-clean

[![Build Status](https://travis-ci.org/JPeer264/node-is-git-clean.svg?branch=master)](https://travis-ci.org/JPeer264/node-is-git-clean)
[![Build status](https://ci.appveyor.com/api/projects/status/ehj6762gbj1e2qyc?svg=true)](https://ci.appveyor.com/project/JPeer264/node-is-git-clean)
[![Coverage Status](https://coveralls.io/repos/github/JPeer264/node-is-git-clean/badge.svg?branch=master)](https://coveralls.io/github/JPeer264/node-is-git-clean?branch=master)

Checks synchronously if the git repository is clean. This assumes that no files are added, untracked or modified.

## Installation

```sh
$ npm i is-git-clean --save
```
or
```sh
$ yarn add is-git-clean
```

## Usage

Returns:
- `false`: Files are added, untracked, modified or the path is not a git repository
- `true`: No files are added, untracked or modified.

```js
const isGitClean = require('is-git-clean');

isGitClean(); // true or false of process.cwd()
isGitClean('any/git/repo'); // true or false
```

## LICENSE

MIT © [Jan Peer Stöcklmair](https://www.jpeer.at)
