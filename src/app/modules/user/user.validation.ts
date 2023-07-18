import { z } from 'zod'

//req-validation
//body--> object
//data--> object
const createUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'role is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
    name: z.object({
      firstName: z.string({
        required_error: 'firstName is required',
      }),
      lastName: z
        .string({
          required_error: 'Last name is required',
        })
        .optional(),
    }),
  }),
})

const updateUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'role is required',
    }),
    password: z
      .string({
        required_error: 'password is required',
      })
      .optional(),
    name: z
      .object({
        firstName: z
          .string({
            required_error: 'firstName is required',
          })
          .optional(),
        lastName: z
          .string({
            required_error: 'Last name is required',
          })
          .optional(),
      })
      .optional(),
  }),
})
export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
}
