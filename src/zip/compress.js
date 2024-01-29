import path from 'path';
import zlib from 'zlib';
import fs from 'fs';

const fileToCompress = path.join('./src/zip/', 'files', 'fileToCompress.txt');
const compressedFile = path.join('./src/zip/', 'files', 'archive.gz');

const compress = async (src, dest) => {
  const compress = zlib.createGzip();
  const input = fs.createReadStream(src);
  const output = fs.createWriteStream(dest);
  input.pipe(compress).pipe(output);
  console.log(`File ${path.basename(src)} compressed!`);
};

await compress(fileToCompress, compressedFile);
