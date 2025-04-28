const parseEnv = () => {
  const env = process.env;
  const envVars = Object.entries(env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");

  console.log(envVars);
};

parseEnv();
