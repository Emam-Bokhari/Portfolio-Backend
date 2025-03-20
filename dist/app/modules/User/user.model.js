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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.User = void 0;
const mongoose_1 = require('mongoose');
const bcrypt_1 = __importDefault(require('bcrypt'));
const userSchema = new mongoose_1.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// statics method for check if user exists
userSchema.statics.isUserExists = function (email) {
  return __awaiter(this, void 0, void 0, function* () {
    return yield exports.User.findOne({ email: email }).select('+password');
  });
};
// statics method for password matched
userSchema.statics.isPasswordMatched = function (
  plainTextPassword,
  hashedPassword,
) {
  return __awaiter(this, void 0, void 0, function* () {
    return yield bcrypt_1.default.compare(plainTextPassword, hashedPassword);
  });
};
exports.User = (0, mongoose_1.model)('User', userSchema);
