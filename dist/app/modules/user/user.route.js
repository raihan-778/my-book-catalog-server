"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
//create user route
// router.post(
//   '/auth/signup',
//   validateRequest(UserValidation.createUserZodSchema),
//   UserController.createUser
// )
//updatesingel users route
router.patch('/users/:id', (0, validationRequest_1.default)(user_validation_1.UserValidation.updateUserZodSchema), user_controller_1.UserController.updateUser);
exports.UserRoutes = router;
//route & service level validation steps for update semesters
//01-->Ensure o1--> Route Level:Update--> title & code must be given or neither.
//02--> Ensure 2-->Servide Level:Update-->Mapping title & code
