import fs from 'fs';
import path from 'path';

const fileToWrite = path.join('./src/streams/', 'files', 'fileToWrite.txt');

const write = async (src) => {
  const writer = fs.createWriteStream(src, 'utf-8');
  process.stdin.pipe(writer);
  console.log('Enter your text:');
};

await write(fileToWrite);
