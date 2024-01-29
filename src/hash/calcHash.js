import crypto from 'crypto';
import path from 'path';
import fs from 'fs/promises';

const filePath = path.join(
  './src/hash/',
  'files',
  'fileToCalculateHashFor.txt'
);

const calculateHash = async (src) => {
  try {
    const fileContent = await fs.readFile(src);
    const hash = crypto.createHash('sha256').update(fileContent).digest('hex');
    console.log(`Hash for ${path.basename(src)} is ${hash}`);
  } catch (error) {
    throw error;
  }
};

await calculateHash(filePath);
