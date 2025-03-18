import express from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { ProjectRoutes } from '../modules/Project/project.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
