process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if(cmd === 'pwd') {
    process.stdout.write(pwd());
  } else if (cmd === 'ls') {
    ls();
  }

  process.stdout.write('\nprompt > ')
});

const pwd = require('./pwd.js');
const ls = require('./ls.js')





