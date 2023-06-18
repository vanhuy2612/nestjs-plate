export const Env = {
  HOST: process.env.HOST || "localhost",
  PORT: parseInt(process.env.PORT) || 3333,

  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "abcdefgh123456789",

  THROTTLE_TTL: parseInt(process.env.THROTTLE_TTL) || 10,
  THROTTLE_LIMIT: parseInt(process.env.THROTTLE_LIMIT) || 10,

  DB_TYPE: process.env.DB_TYPE,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_URL: process.env.DB_URL,
};
