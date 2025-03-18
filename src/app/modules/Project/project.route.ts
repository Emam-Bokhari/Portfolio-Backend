import express from 'express';
import { ProjectControllers } from './project.controller';
import { validateRequestSchema } from '../../middlewares/validateRequestSchema';
import { ProjectValidationSchema } from './project.validation';

const router = express.Router();

router.post(
  '/',
  validateRequestSchema(ProjectValidationSchema.createProjectValidationSchema),
  ProjectControllers.createProjectController,
);

router.get('/', ProjectControllers.getAllProjectsController);

router.get(
  '/featured-project',
  ProjectControllers.getFeaturedProjectController,
);

router.get('/:id', ProjectControllers.getProjectController);

router.patch(
  '/:id',
  validateRequestSchema(ProjectValidationSchema.updateProjectValidationSchema),
  ProjectControllers.updateProjectController,
);

router.delete('/:id', ProjectControllers.deleteProjectController);

export const ProjectRoutes = router;
