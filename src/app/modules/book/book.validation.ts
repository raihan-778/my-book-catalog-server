import { z } from 'zod'

//req-validation
//body--> object
//data--> object
const addBookZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    author: z.string({
      required_error: 'Author is required',
    }),
    genre: z.string({
      required_error: 'Genre is required',
    }),
    publicationDate: z.string({
      required_error: 'publication Date is required',
    }),
  }),
})
const addReviewZodSchema = z.object({
  body: z.object({
    review: z.string({
      required_error: 'Review is required',
    }),
  }),
})

const editBookZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    genre: z.string().optional(),
    publicationDate: z.string().optional(),
    review: z.string().optional(),
  }),
})

export const BookValidation = {
  addBookZodSchema,
  editBookZodSchema,
  addReviewZodSchema,
}
