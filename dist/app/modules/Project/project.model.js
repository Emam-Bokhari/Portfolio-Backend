'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Project = void 0;
const mongoose_1 = require('mongoose');
const queryFilter_1 = require('../../../utils/moduleSpecific/queryFilter');
const projectSchema = new mongoose_1.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    thumbnail: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    projectRole: {
      type: String,
      trim: true,
      required: true,
    },
    technologiesUsed: {
      type: [String],
      required: true,
    },
    challengesFaced: {
      type: String,
      trim: true,
    },
    solution: {
      type: String,
      trim: true,
    },
    keyFeatures: {
      type: [String],
      required: true,
    },
    liveLink: {
      type: String,
      trim: true,
      required: true,
    },
    frontendSourceCode: {
      type: String,
      trim: true,
      required: true,
    },
    backendSourceCode: {
      type: String,
      trim: true,
    },
    apiDocumentation: {
      type: String,
      trim: true,
    },
    projectGoals: {
      type: String,
      trim: true,
    },
    futureImprovements: {
      type: String,
      trim: true,
    },
    securityConsiderations: {
      type: String,
      trim: true,
    },
    projectTimeline: {
      type: String,
      trim: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
// query middleware for soft delete by utils
projectSchema.pre('find', queryFilter_1.excludeDeletedQuery);
projectSchema.pre('findOne', queryFilter_1.excludeDeletedQuery);
// aggregate middleware for soft delete by utils
projectSchema.pre('aggregate', queryFilter_1.excludeDeletedAggregation);
exports.Project = (0, mongoose_1.model)('Project', projectSchema);
