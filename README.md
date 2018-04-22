# is-git-clean

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
