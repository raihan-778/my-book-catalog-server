import express from 'express'
import validateRequest from '../../middleware/validationRequest'
import { BookController } from './book.controller'
import { BookValidation } from './book.validation'
const router = express.Router()
//create user route
router.post(
  '/add-new-book',
  validateRequest(BookValidation.addBookZodSchema),
  BookController.addBook
)
router.get('/', BookController.getAllBooks)

router.get('/:id', BookController.getbookDetails)

router.patch(
  '/:id',
  validateRequest(BookValidation.editBookZodSchema),
  BookController.editBook
)

router.delete(
  '/:id',

  BookController.deleteBook
)

export const BookRoutes = router
