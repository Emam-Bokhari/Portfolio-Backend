import { z } from 'zod';

const createContactValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    // .min(3, 'Name must be at least 3 characters long')
    // .max(100, 'Name must not exceed 100 characters'),
    email: z.string().email('Invalid email format'),
    phone: z.string().optional(),
    // .refine(
    //   (val) => val === undefined || /^\+?\d{10,15}$/.test(val),
    //   'Phone number must be a valid format with 10-15 digits',
    // ),
    message: z.string(),
    // .min(10, 'Message must be at least 10 characters long')
    // .max(1000, 'Message must not exceed 1000 characters'),
    isDeleted: z.boolean().default(false),
  }),
});

export const ContactValidationSchema = {
  createContactValidationSchema,
};
