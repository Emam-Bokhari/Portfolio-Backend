import express from 'express';
import { validateRequestSchema } from '../../middlewares/validateRequestSchema';
import { UserValidationSchema } from './user.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/login',
  validateRequestSchema(UserValidationSchema.loginValidationSchema),
  UserControllers.loginAdminController,
);

export const UserRoutes = router;
