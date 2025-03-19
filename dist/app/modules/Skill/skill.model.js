'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Skill = void 0;
const mongoose_1 = require('mongoose');
const skillSchema = new mongoose_1.Schema(
  {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
exports.Skill = (0, mongoose_1.model)('Skill', skillSchema);
