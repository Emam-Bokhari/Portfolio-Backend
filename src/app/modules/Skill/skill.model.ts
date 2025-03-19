import { model, Schema } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>(
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

export const Skill = model<TSkill>('Skill', skillSchema);
