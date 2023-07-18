import { SortOrder } from 'mongoose'
import { paginationHelper } from '../../../helpers/paginationHelpers'
import { IGenericResponse } from '../../../interfaces/common'
import { IPaginationOptions } from '../../../interfaces/pagination'
import { IBook, IBookFilters, IBookReview } from './book.interface'
import { Book } from './book.model'
import { bookFilterableFields } from './books.constant'

const addBook = async (payload: IBook) => {
  const result = await Book.create(payload)
  return result
}

const getAllBooks = async (
  filters: IBookFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(paginationOptions)

  const { searchTerm, ...filteredData } = filters

  const andConditions = []
  if (searchTerm) {
    andConditions.push({
      //dynamic search tearm
      $or: bookFilterableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    })
  }

  if (Object.keys(filteredData).length) {
    andConditions.push({
      $and: Object.entries(filteredData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const sortCondition: { [key: string]: SortOrder } = {}

  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder
  }
  const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {}
  const result = await Book.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)

  const total = await Book.countDocuments()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

const getBookDetails = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id)
  return result
}

const editBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}
const addReview = async (
  id: string,
  payload: IBookReview
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}
const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(
    { _id: id },
    {
      new: true,
    }
  )
  return result
}

export const BookService = {
  addBook,
  getAllBooks,
  getBookDetails,
  editBook,
  deleteBook,
  addReview,
}
