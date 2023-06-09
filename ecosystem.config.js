/*global module*/
module.exports = {
    apps: [{
      name: 'react',
      script: 'yarn',
      args: 'start',
      cwd: '/var/www/aula.upfic.pe/react',
      env: {
        PORT: 3000
      }
    }],
    deploy: {
      production: {
        user: 'root',
        host: 'localhost',
        ref: 'origin/main',
        repo: 'git@github.com:anderCM/react.git',
        branch: 'main',
        path: '/var/www/aula.upfic.pe/react',
        ssh_options: ['StrictHostKeyChecking=no', 'PasswordAuthentication=no', 'IdentityFile=~/.ssh/id_rsa', 'UserKnownHostsFile=/dev/null', 'IdentitiesOnly=yes', 'AddKeysToAgent=yes', 'ForwardAgent=yes', 'PreferredAuthentications=publickey', 'PasswordAuthentication=no', 'User=anderCM', 'IdentityFile=~/.ssh/id_rsa', 'AddKeysToAgent=yes'],
        'pre-deploy': 'git fetch && git checkout main && git pull origin main',
        'post-deploy': 'yarn install && pm2 reload /var/www/aula.upfic.pe/react/ecosystem.config.js --env production'
      }
    }
  }
  