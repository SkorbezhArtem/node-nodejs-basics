import stream from 'stream';
import os from 'os';

const transform = async () => {
  const transformStream = new stream.Transform({
    transform(chunk, encoding, callback) {
      chunk = chunk.toString().replace(os.EOL, '').split('').reverse().join('');
      this.push(chunk + os.EOL);
      callback();
    },
  });
  process.stdin.pipe(transformStream).pipe(process.stdout);
  console.log('Enter your text:');
};

await transform();
