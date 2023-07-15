import { Model } from 'mongoose'

export type IBookReview = {
  review: string
}

export type IBook = {
  title: string
  author: string
  genre: string
  reviews?: IBookReview[]
  publicationDate: string
}

export type IBookFilters = {
  searchTerm?: string
  title?: string
  author?: string
  genre?: string
  publicationDate?: string
}

export type BookModel = Model<IBook, Record<string, unknown>>
