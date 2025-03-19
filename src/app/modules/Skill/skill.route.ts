import express from 'express';

import { validateRequestSchema } from '../../middlewares/validateRequestSchema';

import { auth } from '../../middlewares/auth';
import { SkillControllers } from './skill.controller';
import { SkillValidationSchema } from './skill.validation';

const router = express.Router();

router.post(
    '/',
    auth(),
    validateRequestSchema(SkillValidationSchema.createSkillValidationSchema),
    SkillControllers.createSkillController,
);

router.get('/', SkillControllers.getAllSkillsController);

router.get('/:id', SkillControllers.getSkillController);

router.patch(
    '/:id',
    auth(),
    validateRequestSchema(SkillValidationSchema.updateSkillValidationSchema),
    SkillControllers.updateSkillController,
);

router.delete('/:id', auth(), SkillControllers.deleteSkillController);

export const SkillRoutes = router;
