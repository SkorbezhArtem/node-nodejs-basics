import fs from 'fs/promises';
import path from 'path';

const folder = path.join('./src/fs/', 'files');

const list = async (src) => {
  try {
    const files = await fs.readdir(src);
    console.log(files.map((file) => path.parse(file).name));
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list(folder);
