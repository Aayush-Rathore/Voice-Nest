import { verify } from "jsonwebtoken";

export const verifyRefreshToken = async (token: string) => {
  return await verify(token, process.env.REFRESH_TOKEN_KEY);
};

export const verifyTempToken = async (token: string) => {
  return await verify(token, process.env.TEMP_TOKEN_KEY);
};
