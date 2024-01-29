import os from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const workerPath = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
  const cpu = os.cpus();
  let num = 10;
  const workers = cpu.map((_, i) => {
    return new Promise((res, rej) => {
      const worker = new Worker(workerPath, {
        workerData: num++,
      });
      worker.on('message', res);
      worker.on('error', rej);
    });
  });
  const promisesArr = await Promise.allSettled(workers);
  console.log(promisesArr);
  const results = promisesArr.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: value ? value : null,
  }));

  console.log(results);
};

await performCalculations();
