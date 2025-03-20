'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ContactValidationSchema = void 0;
const zod_1 = require('zod');
const createContactValidationSchema = zod_1.z.object({
  body: zod_1.z.object({
    name: zod_1.z.string(),
    // .min(3, 'Name must be at least 3 characters long')
    // .max(100, 'Name must not exceed 100 characters'),
    email: zod_1.z.string().email('Invalid email format'),
    phone: zod_1.z.string().optional(),
    // .refine(
    //   (val) => val === undefined || /^\+?\d{10,15}$/.test(val),
    //   'Phone number must be a valid format with 10-15 digits',
    // ),
    message: zod_1.z.string(),
    // .min(10, 'Message must be at least 10 characters long')
    // .max(1000, 'Message must not exceed 1000 characters'),
    isDeleted: zod_1.z.boolean().default(false),
  }),
});
exports.ContactValidationSchema = {
  createContactValidationSchema,
};
