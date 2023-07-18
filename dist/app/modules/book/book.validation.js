"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
//req-validation
//body--> object
//data--> object
const addBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
        }),
        author: zod_1.z.string({
            required_error: 'Author is required',
        }),
        genre: zod_1.z.string({
            required_error: 'Genre is required',
        }),
        publicationDate: zod_1.z.string({
            required_error: 'publication Date is required',
        }),
    }),
});
const addReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        review: zod_1.z.string({
            required_error: 'Review is required',
        }),
    }),
});
const editBookZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        genre: zod_1.z.string().optional(),
        publicationDate: zod_1.z.string().optional(),
        review: zod_1.z.string().optional(),
    }),
});
exports.BookValidation = {
    addBookZodSchema,
    editBookZodSchema,
    addReviewZodSchema,
};
