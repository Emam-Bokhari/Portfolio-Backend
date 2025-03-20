'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.SkillControllers = void 0;
const asyncHandler_1 = require('../../../utils/global/asyncHandler');
const sendResponse_1 = require('../../../utils/sendResponse');
const skill_service_1 = require('./skill.service');
const createSkillController = (0, asyncHandler_1.asyncHandler)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const skillPayload = req.body;
    const createdSkill =
      yield skill_service_1.SkillServices.createSkill(skillPayload);
    (0, sendResponse_1.sendResponse)(res, {
      success: true,
      statusCode: 201,
      message: 'Skill is created successfully',
      data: createdSkill,
    });
  }),
);
const getAllSkillsController = (0, asyncHandler_1.asyncHandler)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const skills = yield skill_service_1.SkillServices.getAllSkills();
    (0, sendResponse_1.sendResponse)(res, {
      success: true,
      statusCode: 200,
      message: 'Skills are retrieved successfully',
      data: skills,
    });
  }),
);
const getSkillController = (0, asyncHandler_1.asyncHandler)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const skill = yield skill_service_1.SkillServices.getSkillById(id);
    (0, sendResponse_1.sendResponse)(res, {
      success: true,
      statusCode: 200,
      message: 'Skill is retrieved successfully',
      data: skill,
    });
  }),
);
const updateSkillController = (0, asyncHandler_1.asyncHandler)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedPayload = req.body;
    const updatedSkill = yield skill_service_1.SkillServices.updateSkillById(
      id,
      updatedPayload,
    );
    (0, sendResponse_1.sendResponse)(res, {
      success: true,
      statusCode: 200,
      message: 'Skill is updated successfully',
      data: updatedSkill,
    });
  }),
);
const deleteSkillController = (0, asyncHandler_1.asyncHandler)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield skill_service_1.SkillServices.deleteSkillById(id);
    (0, sendResponse_1.sendResponse)(res, {
      success: true,
      statusCode: 200,
      message: 'Skill is deleted successfully',
      data: {},
    });
  }),
);
exports.SkillControllers = {
  createSkillController,
  getAllSkillsController,
  getSkillController,
  updateSkillController,
  deleteSkillController,
};
