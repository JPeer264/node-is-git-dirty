import execa from 'execa';
import isGit from 'is-git-repository';

const processCwd = process.cwd();

const isGitDirty = (cwd = processCwd): boolean | null => {
  if (!isGit(cwd)) {
    return null;
  }

  try {
    const { stdout } = execa.commandSync('git status --short', { cwd });

    return stdout.length > 0;
  } catch (e) {
    return null;
  }
};

export default isGitDirty;
