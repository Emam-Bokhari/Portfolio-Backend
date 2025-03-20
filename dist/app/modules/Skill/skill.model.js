'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Skill = void 0;
const mongoose_1 = require('mongoose');
const queryFilter_1 = require('../../../utils/moduleSpecific/queryFilter');
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
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
// query middleware for soft delete by utils
skillSchema.pre('find', queryFilter_1.excludeDeletedQuery);
skillSchema.pre('findOne', queryFilter_1.excludeDeletedQuery);
// aggregate middleware for soft delete by utils
skillSchema.pre('aggregate', queryFilter_1.excludeDeletedAggregation);
exports.Skill = (0, mongoose_1.model)('Skill', skillSchema);
