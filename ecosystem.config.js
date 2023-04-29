module.exports = {
    apps: [{
      name: 'upfic',
      script: 'yarn',
      args: 'start',
      cwd: '/var/www/aula.upfic.pe/upfic'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'localhost',
        ref: 'origin/main',
        repo: 'git@github.com:anderCM/react-app.git',
        branch: 'main',
        path: '/var/www/aula.upfic.pe/upfic',
        ssh_options: ['StrictHostKeyChecking=no', 'PasswordAuthentication=no', 'IdentityFile=~/.ssh/ssh_andercm_github', 'UserKnownHostsFile=/dev/null', 'IdentitiesOnly=yes', 'AddKeysToAgent=yes', 'ForwardAgent=yes', 'PreferredAuthentications=publickey', 'PasswordAuthentication=no', 'User=anderCM', 'IdentityFile=~/.ssh/ssh_andercm_github', 'AddKeysToAgent=yes'],
        'post-deploy': 'yarn install && pm2 reload ecosystem.config.js --env production'
      }
    }
  }
  