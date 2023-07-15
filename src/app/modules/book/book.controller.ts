import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { paginationFields } from '../../../constantFiles/paginationConstants'
import catchAsync from '../../../shared/catchAsync'
import pick from '../../../shared/pick'
import sendResponse from '../../../shared/sendResponse'
import { bookFilterableFields } from './books.constant'
import { BookService } from './book.service'
import { IBook } from './book.interface'

//create data functions
const addBook = catchAsync(async (req: Request, res: Response) => {
  const { ...bookData } = req.body
  const result = await BookService.addBook(bookData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book added Successfully',
    data: result,
  })
})

//get all data function
const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields)
  const paginationOptions = pick(req.query, paginationFields)

  const result = await BookService.getAllBooks(filters, paginationOptions)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book data retrived Successfully',
    meta: result.meta,
    data: result.data,
  })
})

//get single data function
const getbookDetails = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await BookService.getBookDetails(id)

  sendResponse<IBook | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Information retrived Successfully',
    data: result,
  })
})

//Update function
const editBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await BookService.editBook(id, updatedData)

  sendResponse<IBook | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book information edited Successfully',
    data: result,
  })
})
//add review function
const addReview = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await BookService.addReview(id, updatedData)

  sendResponse<IBook | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book information edited Successfully',
    data: result,
  })
})
//delete function
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id

  const result = await BookService.deleteBook(id)

  sendResponse<IBook | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Book Information deleted Successfully',
    data: result,
  })
})

export const BookController = {
  addBook,
  getAllBooks,
  getbookDetails,
  editBook,
  deleteBook,
  addReview,
}
