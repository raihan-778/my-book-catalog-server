"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const book_controller_1 = require("./book.controller");
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
//create user route
router.post('/add-new-book', (0, validationRequest_1.default)(book_validation_1.BookValidation.addBookZodSchema), book_controller_1.BookController.addBook);
router.get('/', book_controller_1.BookController.getAllBooks);
router.get('/:id', book_controller_1.BookController.getbookDetails);
router.patch('/:id', (0, validationRequest_1.default)(book_validation_1.BookValidation.editBookZodSchema), book_controller_1.BookController.editBook);
router.delete('/:id', book_controller_1.BookController.deleteBook);
exports.BookRoutes = router;
