'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.SkillValidationSchema = void 0;
const zod_1 = require('zod');
const createSkillValidationSchema = zod_1.z.object({
  body: zod_1.z.object({
    icon: zod_1.z.string(),
    name: zod_1.z.string(),
    category: zod_1.z.enum(['frontend', 'backend', 'softSkills', 'others']),
    description: zod_1.z.string(),
    isDeleted: zod_1.z.boolean().default(false),
  }),
});
const updateSkillValidationSchema = zod_1.z.object({
  body: zod_1.z.object({
    icon: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    category: zod_1.z
      .enum(['frontend', 'backend', 'softSkills', 'others'])
      .optional(),
    description: zod_1.z.string().optional(),
    isDeleted: zod_1.z.boolean().default(false),
  }),
});
exports.SkillValidationSchema = {
  createSkillValidationSchema,
  updateSkillValidationSchema,
};
