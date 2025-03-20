export type TSkill = {
  icon: string;
  name: string;
  description: string;
  category: 'frontend' | 'backend' | 'softSkills' | 'others';
  isDeleted?: boolean;
};
