import { HttpError } from '../../errors/HttpError';
import { TSkill } from './skill.interface';
import { Skill } from './skill.model';


const createSkill = async (payload: TSkill) => {
    const createdSkill = await Skill.create(payload);
    return createdSkill;
};

const getAllSkills = async () => {
    const skills = await Skill.find();

    if (skills.length === 0) {
        throw new HttpError(404, 'Skills were not found in the database');
    }

    return skills;
};

const getSkillById = async (id: string) => {
    const skill = await Skill.findById(id);
    if (!skill) {
        throw new HttpError(404, 'The requested skill could not be found.');
    }
    return skill;
};

const updateSkillById = async (id: string, payload: Partial<TSkill>) => {
    const updatedSkill = await Skill.findOneAndUpdate(
        { _id: id },
        payload,
        { new: true, runValidators: true },
    );


    if (!updatedSkill) {
        throw new HttpError(404, 'The requested skill could not be found.');
    }
    return updatedSkill;
};

const deleteSkillById = async (id: string) => {
    const deletedSkill = await Skill.findOneAndUpdate(
        { _id: id, isDeleted: false },
        { isDeleted: true },
        { new: true },
    );
    if (!deletedSkill) {
        throw new HttpError(404, 'The requested skill could not be found.');
    }
    return deletedSkill;
};

export const SkillServices = {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkillById,
    deleteSkillById,
};
