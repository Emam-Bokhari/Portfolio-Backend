import { Document, Model, Types } from 'mongoose';

export interface TUser extends Document {
  _id: Types.ObjectId;
  email: string;
  password: string;
}

export interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser>;

  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
