import fs from 'fs/promises';
import path from 'path';

const inputFile = path.join('./src/fs/', 'files', 'wrongFilename.txt');
const outputFile = path.join('./src/fs/', 'files', 'properFilename.md');

const rename = async (src, dest) => {
  const checkFile = async (path) => {
    try {
      await fs.access(path);
      return true;
    } catch {
      return false;
    }
  };
  if (!(await checkFile(src)) || (await checkFile(dest))) {
    throw new Error('FS operation failed');
  } else {
    await fs.rename(src, dest);
  }
};

await rename(inputFile, outputFile);
