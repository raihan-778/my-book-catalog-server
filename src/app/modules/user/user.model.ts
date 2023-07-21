import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const userSchema = new Schema<IUser, UserModel>(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },

    name: {
      firstName: { type: String, required: true },
      lastName: { type: String },
    },
    phoneNumber: { type: String, unique: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
)

export const User = model<IUser, UserModel>('User', userSchema)
