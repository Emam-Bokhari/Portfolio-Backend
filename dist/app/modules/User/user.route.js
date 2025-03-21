"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequestSchema_1 = require("../../middlewares/validateRequestSchema");
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post('/login', (0, validateRequestSchema_1.validateRequestSchema)(user_validation_1.UserValidationSchema.loginValidationSchema), user_controller_1.UserControllers.loginAdminController);
exports.UserRoutes = router;
