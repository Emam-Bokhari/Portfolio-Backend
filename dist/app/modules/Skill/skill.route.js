'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.SkillRoutes = void 0;
const express_1 = __importDefault(require('express'));
const validateRequestSchema_1 = require('../../middlewares/validateRequestSchema');
const auth_1 = require('../../middlewares/auth');
const skill_controller_1 = require('./skill.controller');
const skill_validation_1 = require('./skill.validation');
const router = express_1.default.Router();
router.post(
  '/',
  (0, auth_1.auth)(),
  (0, validateRequestSchema_1.validateRequestSchema)(
    skill_validation_1.SkillValidationSchema.createSkillValidationSchema,
  ),
  skill_controller_1.SkillControllers.createSkillController,
);
router.get('/', skill_controller_1.SkillControllers.getAllSkillsController);
router.get('/:id', skill_controller_1.SkillControllers.getSkillController);
router.patch(
  '/:id',
  (0, auth_1.auth)(),
  (0, validateRequestSchema_1.validateRequestSchema)(
    skill_validation_1.SkillValidationSchema.updateSkillValidationSchema,
  ),
  skill_controller_1.SkillControllers.updateSkillController,
);
router.delete(
  '/:id',
  (0, auth_1.auth)(),
  skill_controller_1.SkillControllers.deleteSkillController,
);
exports.SkillRoutes = router;
