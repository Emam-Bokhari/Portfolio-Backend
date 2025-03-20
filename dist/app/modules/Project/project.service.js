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
exports.ProjectServices = void 0;
const HttpError_1 = require('../../errors/HttpError');
const project_model_1 = require('./project.model');
const createProject = (payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const createdProject = yield project_model_1.Project.create(payload);
    return createdProject;
  });
const getAllProjects = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield project_model_1.Project.find();
    if (projects.length === 0) {
      throw new HttpError_1.HttpError(
        404,
        'Projects were not found in the database',
      );
    }
    return projects;
  });
const getFeaturedProject = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const featuredProject = yield project_model_1.Project.findOne({
      isFeatured: true,
    });
    if (!featuredProject) {
      throw new HttpError_1.HttpError(
        404,
        'Featured projects were not found in the database.',
      );
    }
    return featuredProject;
  });
const getProjectById = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const project = yield project_model_1.Project.findById(id);
    if (!project) {
      throw new HttpError_1.HttpError(
        404,
        'The requested project could not be found.',
      );
    }
    return project;
  });
const updateProjectById = (id, payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const updatedProject = yield project_model_1.Project.findOneAndUpdate(
      { _id: id, isDeleted: false },
      payload,
      { new: true, runValidators: true },
    );
    if (!updatedProject) {
      throw new HttpError_1.HttpError(
        404,
        'The requested project could not be found.',
      );
    }
    return updatedProject;
  });
const deleteProjectById = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const deletedProject = yield project_model_1.Project.findOneAndUpdate(
      { _id: id, isDeleted: false },
      { isDeleted: true },
      { new: true },
    );
    if (!deletedProject) {
      throw new HttpError_1.HttpError(
        404,
        'The requested project could not be found.',
      );
    }
    return deletedProject;
  });
exports.ProjectServices = {
  createProject,
  getAllProjects,
  getFeaturedProject,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
