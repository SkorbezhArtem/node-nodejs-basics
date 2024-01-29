const parseEnv = () => {
  const prefix = 'RSS_';
  const arr = [];
  for (const key in process.env) {
    if (key.startsWith(prefix)) {
      arr.push(`${key}=${process.env[key]}`);
    }
  }
  console.log(arr.join('; '));
};

parseEnv();
