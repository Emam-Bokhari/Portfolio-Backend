"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectControllers = void 0;
const asyncHandler_1 = require("../../../utils/global/asyncHandler");
const sendResponse_1 = require("../../../utils/sendResponse");
const project_service_1 = require("./project.service");
const createProjectController = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projectPayload = req.body;
    const createdProject = yield project_service_1.ProjectServices.createProject(projectPayload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 201,
        message: 'Project is created successfully',
        data: createdProject,
    });
}));
const getAllProjectsController = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield project_service_1.ProjectServices.getAllProjects();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: 'Projects are retrieving successfully',
        data: projects,
    });
}));
const getFeaturedProjectController = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const featuredProject = yield project_service_1.ProjectServices.getFeaturedProject();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: 'Featured projects are retrieving successfully',
        data: featuredProject,
    });
}));
const getProjectController = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const project = yield project_service_1.ProjectServices.getProjectById(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: 'Project is retrieving successfully',
        data: project,
    });
}));
const updateProjectController = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedPayload = req.body;
    const updatedProject = yield project_service_1.ProjectServices.updateProjectById(id, updatedPayload);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: 'Project is updated successfully',
        data: updatedProject,
    });
}));
const deleteProjectController = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    yield project_service_1.ProjectServices.deleteProjectById(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: 'Project is deleted successfully',
        data: {},
    });
}));
exports.ProjectControllers = {
    createProjectController,
    getAllProjectsController,
    getFeaturedProjectController,
    getProjectController,
    updateProjectController,
    deleteProjectController,
};
