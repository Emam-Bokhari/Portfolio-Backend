'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const user_route_1 = require('../modules/User/user.route');
const project_route_1 = require('../modules/Project/project.route');
const blog_route_1 = require('../modules/Blog/blog.route');
const contact_route_1 = require('../modules/Contact/contact.route');
const skill_route_1 = require('../modules/Skill/skill.route');
const router = express_1.default.Router();
const moduleRoutes = [
  {
    path: '/users',
    route: user_route_1.UserRoutes,
  },
  {
    path: '/projects',
    route: project_route_1.ProjectRoutes,
  },
  {
    path: '/skills',
    route: skill_route_1.SkillRoutes,
  },
  {
    path: '/blogs',
    route: blog_route_1.BlogRoutes,
  },
  {
    path: '/contacts',
    route: contact_route_1.ContactRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
