import express from 'express'
import validateRequest from '../../middleware/validationRequest'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'

const router = express.Router()
//create user route
// router.post(
//   '/auth/signup',
//   validateRequest(UserValidation.createUserZodSchema),
//   UserController.createUser
// )

//updatesingel users route
router.patch(
  '/users/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
)

export const UserRoutes = router

//route & service level validation steps for update semesters
//01-->Ensure o1--> Route Level:Update--> title & code must be given or neither.
//02--> Ensure 2-->Servide Level:Update-->Mapping title & code
