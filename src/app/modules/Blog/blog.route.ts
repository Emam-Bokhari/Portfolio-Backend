import express from 'express';
import { BlogControllers } from './blog.controller';
import { validateRequestSchema } from '../../middlewares/validateRequestSchema';
import { BlogValidationSchema } from './blog.validation';


const router = express.Router();

router.post(
    '/',
    validateRequestSchema(BlogValidationSchema.createBlogValidationSchema),
    BlogControllers.createBlogController,
);

router.get('/', BlogControllers.getAllBlogsController);

router.get('/:id', BlogControllers.getBlogController);

router.patch(
    '/:id',
    validateRequestSchema(BlogValidationSchema.updateBlogValidationSchema),
    BlogControllers.updateBlogController,
);

router.delete('/:id', BlogControllers.deleteBlogController);

export const BlogRoutes = router;