"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectValidationSchema = void 0;
const zod_1 = require("zod");
const createProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            // .min(5, 'Title must be at least 5 characters long')
            .max(100, 'Title must not exceed 100 characters'),
        thumbnail: zod_1.z.string(),
        description: zod_1.z
            .string()
            // .min(20, 'Description must be at least 20 characters long')
            .max(1000, 'Description must not exceed 1000 characters'),
        technologiesUsed: zod_1.z.array(zod_1.z.string().min(3, 'Technology name must be at least 3 characters long')),
        challengesFaced: zod_1.z.string().optional(),
        solution: zod_1.z.string().optional(),
        keyFeatures: zod_1.z.array(zod_1.z.string()),
        liveLink: zod_1.z.string(),
        frontendSourceCode: zod_1.z.string().optional(),
        backendSourceCode: zod_1.z.string().optional(),
        apiDocumentation: zod_1.z.string().optional(),
        projectGoals: zod_1.z.string().optional(),
        futureImprovements: zod_1.z.string().optional(),
        securityConsiderations: zod_1.z.string().optional(),
        projectTimeline: zod_1.z.string().nullable().optional(),
        isFeatured: zod_1.z.boolean().default(false),
        isDeleted: zod_1.z.boolean().default(false),
    }),
});
const updateProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            // .min(5, 'Title must be at least 5 characters long')
            .max(100, 'Title must not exceed 100 characters')
            .optional(),
        thumbnail: zod_1.z.string().optional(),
        description: zod_1.z
            .string()
            // .min(20, 'Description must be at least 20 characters long')
            .max(1000, 'Description must not exceed 1000 characters')
            .optional(),
        technologiesUsed: zod_1.z
            .array(zod_1.z.string())
            .optional(),
        challengesFaced: zod_1.z.string().optional(),
        solution: zod_1.z.string().optional(),
        keyFeatures: zod_1.z
            .array(zod_1.z.string())
            .optional(),
        liveLink: zod_1.z.string().optional(),
        frontendSourceCode: zod_1.z.string().optional(),
        backendSourceCode: zod_1.z.string().optional(),
        apiDocumentation: zod_1.z.string().optional(),
        projectGoals: zod_1.z.string().optional(),
        futureImprovements: zod_1.z.string().optional(),
        securityConsiderations: zod_1.z.string().optional(),
        projectTimeline: zod_1.z.string().nullable().optional(),
        isFeatured: zod_1.z.boolean().default(false),
        isDeleted: zod_1.z.boolean().default(false),
    }),
});
exports.ProjectValidationSchema = {
    createProjectValidationSchema,
    updateProjectValidationSchema,
};
