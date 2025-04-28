const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsObj = {};

  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].slice(2);
    const value = args[i + 1];
    argsObj[key] = value;
  }

  const output = Object.entries(argsObj)
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");

  console.log(output);
};

parseArgs();
