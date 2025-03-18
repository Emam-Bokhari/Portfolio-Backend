import express from 'express';
import { ContactControllers } from './contact.controller';
import { validateRequestSchema } from '../../middlewares/validateRequestSchema';
import { ContactValidationSchema } from './contact.validation';
import { auth } from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/',
  validateRequestSchema(ContactValidationSchema.createContactValidationSchema),
  ContactControllers.createContactController,
);

router.get('/', auth(), ContactControllers.getAllContactsController);

router.get('/:id', auth(), ContactControllers.getContactController);

router.delete('/:id', auth(), ContactControllers.deleteContactController);

export const ContactRoutes = router;
