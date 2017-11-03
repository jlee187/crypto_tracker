'use strict'

const ghPagesList = ['dist/']

module.exports = {
  'git-is-clean': {
    // `$(git status --porcelain)` will evaluate to the empty string if the
    // working directory is clean.
    // `test -z` will exit 0 (true) if its argument is an empty string.
    // If it doesn't exit true, `(git status && false)` will show why the
    // repository isn't clean and exit false causing the grunt tasks to end.
    command: 'test -z "$(git status --porcelain)"  || (git status && false)'
  },
  'git-push-master': {
    command: 'git push origin master'
  },
  'git-checkout-master': {
    command: 'git checkout master'
  },
  'deploy-prepare1': {
    command: 'git branch -D gh-pages || echo "so not removed"'
  },
  'deploy-prepare2': {
    command: 'git checkout --orphan gh-pages'
  },
  'deploy-prepare3': {
    command: 'git rm --cached \'*\''
  },
  'deploy-prepare4': {
    command: 'ember build --environment=production'
  },
  'deploy-dist1': {
    command: 'git add --force dist/'
  },
  'deploy-dist2': {
    command: 'git commit -m "deploy task"'
  },
  'deploy-publish1': {
    command: 'git push origin :gh-pages || echo "so not removed"'
  },
  'deploy-publish2': {
    command: 'git subtree push --prefix dist origin gh-pages'
  },
  'clean-gh-pages': {
    command: 'git clean -x -d --force --exclude=node_modules --exclude=bower_components'
  },
  'return-to-master': {
    command: 'git checkout master'
  }
}
