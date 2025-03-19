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
exports.SkillServices = void 0;
const HttpError_1 = require('../../errors/HttpError');
const skill_model_1 = require('./skill.model');
const createSkill = (payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const createdSkill = yield skill_model_1.Skill.create(payload);
    return createdSkill;
  });
const getAllSkills = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const skills = yield skill_model_1.Skill.find();
    if (skills.length === 0) {
      throw new HttpError_1.HttpError(
        404,
        'Skills were not found in the database',
      );
    }
    return skills;
  });
const getSkillById = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const skill = yield skill_model_1.Skill.findById(id);
    if (!skill) {
      throw new HttpError_1.HttpError(
        404,
        'The requested skill could not be found.',
      );
    }
    return skill;
  });
const updateSkillById = (id, payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const updatedSkill = yield skill_model_1.Skill.findOneAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!updatedSkill) {
      throw new HttpError_1.HttpError(
        404,
        'The requested skill could not be found.',
      );
    }
    return updatedSkill;
  });
const deleteSkillById = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const deletedSkill = yield skill_model_1.Skill.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { isDeleted: true },
      { new: true },
    );
    if (!deletedSkill) {
      throw new HttpError_1.HttpError(
        404,
        'The requested skill could not be found.',
      );
    }
    return deletedSkill;
  });
exports.SkillServices = {
  createSkill,
  getAllSkills,
  getSkillById,
  updateSkillById,
  deleteSkillById,
};
