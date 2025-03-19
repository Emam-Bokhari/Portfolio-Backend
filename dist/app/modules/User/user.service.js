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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const config_1 = __importDefault(require("../../config"));
const HttpError_1 = require("../../errors/HttpError");
const user_model_1 = require("./user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginAdmin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(payload.email);
    if (!user) {
        throw new HttpError_1.HttpError(404, 'User not found');
    }
    // check if user password is matched
    if (!(yield user_model_1.User.isPasswordMatched(payload === null || payload === void 0 ? void 0 : payload.password, user.password))) {
        throw new HttpError_1.HttpError(401, 'Incorrect password');
    }
    // create jwt token
    const jwtPayload = {
        email: user === null || user === void 0 ? void 0 : user.email,
    };
    const token = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_access_secret, {
        expiresIn: '7d',
    });
    return {
        token,
    };
});
exports.UserServices = {
    loginAdmin,
};
