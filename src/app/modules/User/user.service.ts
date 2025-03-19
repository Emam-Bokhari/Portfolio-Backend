import config from '../../config';
import { HttpError } from '../../errors/HttpError';
import { TUser } from './user.interface';
import { User } from './user.model';
import jwt from 'jsonwebtoken';

const loginAdmin = async (payload: TUser) => {
  const user = await User.isUserExists(payload.email);
  if (!user) {
    throw new HttpError(404, 'User not found');
  }

  // check if user password is matched
  if (!(await User.isPasswordMatched(payload?.password, user.password))) {
    throw new HttpError(401, 'Incorrect password');
  }

  // create jwt token
  const jwtPayload = {
    email: user?.email,
  };

  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '7d',
  });

  return {
    token,
  };
};

export const UserServices = {
  loginAdmin,
};
