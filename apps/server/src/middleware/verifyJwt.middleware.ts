import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler.utils";
import Tokens from "../services/token.services";

const tokens = new Tokens();

const verifyJwt = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const tempToken = req.query.token as string;
    const { accessToken, refreshToken } = req.cookies || req.headers.cookie;
    const { aceessTokenPayload, refreshTokenPayload, tempTokenPayload } =
      await tokens.VerifyToken({
        tempToken,
        accessToken,
        refreshToken,
      });

    const verification = {
      aceessTokenPayload,
      refreshTokenPayload,
      tempTokenPayload,
    };

    console.log(verification);
    next();
  }
);

export { verifyJwt };
