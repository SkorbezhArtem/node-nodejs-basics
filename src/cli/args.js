const parseArgs = () => {
  const userArgs = process.argv.slice(2);
  const arr = userArgs
    .map((el, i) => {
      if (el.startsWith('--') && userArgs[i + 1]) {
        return (el = `${el.slice(2)} is ${userArgs[i + 1]}`);
      }
    })
    .filter((el) => el);
  console.log(arr.join(', '));
};

parseArgs();
