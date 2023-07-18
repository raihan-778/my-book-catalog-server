import { Request, Response } from 'express'

import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'

import sendResponse from '../../../shared/sendResponse'

import { IUser } from './user.interface'
import { UserService } from './user.service'

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await UserService.updateUser(id, updatedData)

  sendResponse<IUser | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single User Updated Successfully',
    data: result,
  })
  // next(); here we dot not need to use next() function because after getting response we do not need to call any middleware
})
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await UserService.deleteUser(id)
  sendResponse<IUser | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single User deleted Successfully',
    data: result,
  })
  // next(); here we dot not need to use next() function because after getting response we do not need to call any middleware
})
export const UserController = {
  updateUser,
  deleteUser,
}
