import { HttpError } from '../../errors/HttpError';
import { TProject } from './project.interface';
import { Project } from './project.model';

const createProject = async (payload: TProject) => {
    const createdProject = await Project.create(payload);
    return createdProject;
};

const getAllProjects = async () => {
    const projects = await Project.find();
    if (projects.length === 0) {
        throw new HttpError(404, 'Projects were not found in the database');
    }
    return projects;
};

const getFeaturedProject = async () => {
    const featuredProject = await Project.findOne({ isFeatured: true });
    if (!featuredProject) {
        throw new HttpError(
            404,
            'Featured projects were not found in the database.',
        );
    }
    return featuredProject;
};

const getProjectById = async (id: string) => {
    const project = await Project.findById(id);
    if (!project) {
        throw new HttpError(404, 'The requested project could not be found.');
    }
    return project;
};

const updateProjectById = async (id: string, payload: Partial<TProject>) => {
    const updatedProject = await Project.findOneAndUpdate(
        { _id: id, isDeleted: false },
        payload,
        { new: true, runValidators: true },
    );
    if (!updatedProject) {
        throw new HttpError(404, 'The requested project could not be found.');
    }
    return updatedProject;
};

const deleteProjectById = async (id: string) => {
    const deletedProject = await Project.findOneAndUpdate(
        { _id: id, isDeleted: false },
        { isDeleted: true },
        { new: true },
    );
    if (!deletedProject) {
        throw new HttpError(404, 'The requested project could not be found.');
    }
    return deletedProject;
};

export const ProjectServices = {
    createProject,
    getAllProjects,
    getFeaturedProject,
    getProjectById,
    updateProjectById,
    deleteProjectById,
};