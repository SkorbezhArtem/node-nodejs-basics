import path from 'path';
import zlib from 'zlib';
import fs from 'fs';

const decompressedFile = path.join('./src/zip/', 'files', 'fileToCompress.txt');
const fileToDecompress = path.join('./src/zip/', 'files', 'archive.gz');

const decompress = async (src, dest) => {
  const unzip = zlib.createUnzip();
  const input = fs.createReadStream(src);
  const output = fs.createWriteStream(dest);
  input.pipe(unzip).pipe(output);
  console.log(`File ${path.basename(src)} decompressed!`);
};

await decompress(fileToDecompress, decompressedFile);
