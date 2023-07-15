import { Model } from 'mongoose'

export type IRoleTitle = 'buyer' | 'seller'

export type IUser = {
  password: string
  role: IRoleTitle
  name: {
    firstName: string
    lastName?: string
  }
  phoneNumber: string
  address: string
  budget: number
  income: number
}

export type IUserFilters = {
  searchTerm?: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
