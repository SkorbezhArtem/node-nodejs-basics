import fs from 'fs/promises';
import path from 'path';

const inputFolder = path.join('./src/fs/', 'files');
const outputFolder = path.join('./src/fs/', 'files-copy');

const copy = async (src, dest) => {
  const checkDirectory = async (path) => {
    try {
      await fs.access(path);
      return true;
    } catch {
      return false;
    }
  };
  if (!(await checkDirectory(src)) || (await checkDirectory(dest))) {
    throw new Error('FS operation failed');
  } else {
    const entries = await fs.readdir(src, { withFileTypes: true });
    await fs.mkdir(dest, { recursive: true });
    for (let entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      entry.isDirectory()
        ? await copy(srcPath, destPath)
        : await fs.copyFile(srcPath, destPath);
    }
  }
};

copy(inputFolder, outputFolder);
