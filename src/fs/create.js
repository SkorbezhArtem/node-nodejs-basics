import fs from 'fs';

const create = async () => {
  const filepath = './src/fs/files/fresh.txt';
  const content = 'I am fresh and young';
  fs.open(filepath, 'r', function (err) {
    if (err) {
      fs.writeFile(filepath, content, function (err) {
        if (err) {
          console.log(err);
        }
        console.log('File created');
      });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

await create();
