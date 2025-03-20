'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProjectRoutes = void 0;
const express_1 = __importDefault(require('express'));
const project_controller_1 = require('./project.controller');
const validateRequestSchema_1 = require('../../middlewares/validateRequestSchema');
const project_validation_1 = require('./project.validation');
const auth_1 = require('../../middlewares/auth');
const router = express_1.default.Router();
router.post(
  '/',
  (0, auth_1.auth)(),
  (0, validateRequestSchema_1.validateRequestSchema)(
    project_validation_1.ProjectValidationSchema.createProjectValidationSchema,
  ),
  project_controller_1.ProjectControllers.createProjectController,
);
router.get(
  '/',
  project_controller_1.ProjectControllers.getAllProjectsController,
);
router.get(
  '/featured-project',
  project_controller_1.ProjectControllers.getFeaturedProjectController,
);
router.get(
  '/:id',
  project_controller_1.ProjectControllers.getProjectController,
);
router.patch(
  '/:id',
  (0, auth_1.auth)(),
  (0, validateRequestSchema_1.validateRequestSchema)(
    project_validation_1.ProjectValidationSchema.updateProjectValidationSchema,
  ),
  project_controller_1.ProjectControllers.updateProjectController,
);
router.delete(
  '/:id',
  (0, auth_1.auth)(),
  project_controller_1.ProjectControllers.deleteProjectController,
);
exports.ProjectRoutes = router;
