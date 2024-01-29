import fs from 'fs/promises';
import path from 'path';

const inputFile = path.join('./src/fs/', 'files', 'fileToRemove.txt');

const remove = async (src) => {
  try {
    await fs.unlink(src);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove(inputFile);
