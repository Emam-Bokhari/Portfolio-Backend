import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';
import {
  excludeDeletedAggregation,
  excludeDeletedQuery,
} from '../../../utils/moduleSpecific/queryFilter';

const projectSchema = new Schema<TProject>(
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
projectSchema.pre('find', excludeDeletedQuery);
projectSchema.pre('findOne', excludeDeletedQuery);

// aggregate middleware for soft delete by utils
projectSchema.pre('aggregate', excludeDeletedAggregation);

export const Project = model<TProject>('Project', projectSchema);
