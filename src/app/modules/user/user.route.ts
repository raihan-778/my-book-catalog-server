import express from 'express'
import validateRequest from '../../middleware/validationRequest'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'

const router = express.Router()
//create user route
router.post(
  '/auth/signup',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
)
//get singel users route
router.get(
  '/users/:id',

  UserController.getSingleUser
)
//updatesingel users route
router.patch(
  '/users/:id',

  UserController.updateUser
)
//delete singel users route
router.delete(
  '/users/:id',

  UserController.deleteUser
)
//get all users route
router.get(
  '/users',

  UserController.getAllUsers
)

export const UserRoutes = router

//route & service level validation steps for update semesters
//01-->Ensure o1--> Route Level:Update--> title & code must be given or neither.
//02--> Ensure 2-->Servide Level:Update-->Mapping title & code
