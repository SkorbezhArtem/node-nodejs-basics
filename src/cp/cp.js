import path from 'path';
import cp from 'child_process';

const spawnChildProcess = async (args) => {
  const script = path.join('./src/cp/files', 'script.js');
  const child = cp.spawn('node', [script, ...args]);

  process.stdin.on('data', (data) => {
    child.stdin.write(data);
  });

  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });
};

spawnChildProcess(['--arg1', '--arg2', '--arg3']);
