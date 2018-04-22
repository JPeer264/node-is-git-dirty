import { platform } from 'os';
import execa from 'execa';
import isGit from 'is-git-repository';

const cwd = process.cwd();

const isGitClean = (altPath = cwd) => {
  let stdout;

  if (!isGit(altPath)) {
    return false;
  }

  try {
    if (platform() === 'win32') {
      ({ stdout } = execa.shellSync(`pushd ${altPath} & git status --short`));
    } else {
      ({ stdout } = execa.shellSync(`(cd ${altPath} ; git status --short)`));
    }

    return stdout.length <= 0;
  } catch (e) {
    return false;
  }
};

export default isGitClean;
