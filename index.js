const git = require('simple-git');

async function deploy() {   
   await git().checkout('deploy')
   await git().add('.')
   await git().commit("first commit!")
   await git().push('origin','deploy');
}

deploy()