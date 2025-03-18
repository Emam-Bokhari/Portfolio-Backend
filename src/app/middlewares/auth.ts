import { NextFunction, Request, Response } from 'express';

import { HttpError } from '../errors/HttpError';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/User/user.model';
import { asyncHandler } from '../../utils/global/asyncHandler';

export const auth = () => {
  return asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;

      // // check if no token
      if (!token) {
        throw new HttpError(
          401,
          'Access token is missing or invalid. Please provide a valid token to access this resource.',
        );
      }

      // // token verify
      const decoded = jwt.verify(
        token,
        config.jwt_access_secret as string,
      ) as JwtPayload;
      // console.log(decoded)

      const { email } = decoded;

      // check if the user is exists
      const user = await User.isUserExists(email);
      if (!user) {
        throw new HttpError(
          404,
          ' Invalid credentials or session. Please try logging in again',
        );
      }

      req.user = decoded as JwtPayload;

      next();
    },
  );
};
