import 'dotenv/config';

const getProcessEnv = (key: string) => {
  const value = process.env[key];
  return value;
}

export default getProcessEnv;