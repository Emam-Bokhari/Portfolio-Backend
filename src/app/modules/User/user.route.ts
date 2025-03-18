import express from 'express';
import { validateRequestSchema } from '../../middlewares/validateRequestSchema';
import { UserValidation } from './user.validation';
import { UserControllers } from './user.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
    '/login',
    auth(),
    validateRequestSchema(UserValidation.loginValidationSchema),
    UserControllers.loginAdminController,
);

export const UserRoutes = router;