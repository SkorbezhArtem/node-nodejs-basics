import fs from 'fs';
import path from 'path';

const fileToRead = path.join('./src/streams/', 'files', 'fileToRead.txt');

const read = async (src) => {
  const reader = fs.createReadStream(src, 'utf-8');
  reader.pipe(process.stdout);
};

await read(fileToRead);
