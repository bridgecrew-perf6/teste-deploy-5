const simpleGit = require('simple-git');

simpleGit()
   .init()
   .add('.')
   .commit("first commit!")
   .push('origin', 'main');