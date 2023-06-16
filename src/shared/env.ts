export const Env = {
  HOST: process.env.HOST || "localhost",
  PORT: parseInt(process.env.PORT) || 3333,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "abcdefgh123456789",
};
