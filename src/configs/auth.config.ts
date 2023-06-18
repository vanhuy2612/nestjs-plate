import { Env } from "@src/shared/env";

export const authConfig = {
  JWT_SECRET_KEY: Env.JWT_SECRET_KEY,
  JWT_ACCESS_TOKEN_EXPIRE_IN: 24 * 60 * 60, // 1 day
  JWT_REFRESH_TOKEN_EXPIRE_IN: 30 * 24 * 60 * 60, // 30 days
};
