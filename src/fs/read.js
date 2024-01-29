import fs from 'fs/promises';
import path from 'path';

const fileToRead = path.join('./src/fs/', 'files', 'fileToRead.txt');

const read = async (src) => {
  try {
    const data = await fs.readFile(src, { encoding: 'utf8' });
    console.log(data);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read(fileToRead);
