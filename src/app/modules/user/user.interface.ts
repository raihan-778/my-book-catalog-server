import { Model } from 'mongoose'

export type IUser = {
  email: string
  password: string

  name: {
    firstName: string
    lastName?: string
  }
  phoneNumber?: string
}

export type IUserFilters = {
  searchTerm?: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
