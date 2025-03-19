import express from 'express';
import { BlogControllers } from './blog.controller';
import { validateRequestSchema } from '../../middlewares/validateRequestSchema';
import { BlogValidationSchema } from './blog.validation';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  auth(),
  validateRequestSchema(BlogValidationSchema.createBlogValidationSchema),
  BlogControllers.createBlogController,
);

router.get('/', BlogControllers.getAllBlogsController);

router.get('/:id', BlogControllers.getBlogController);

router.patch(
  '/:id',
  auth(),
  validateRequestSchema(BlogValidationSchema.updateBlogValidationSchema),
  BlogControllers.updateBlogController,
);

router.delete('/:id', auth(), BlogControllers.deleteBlogController);

export const BlogRoutes = router;
