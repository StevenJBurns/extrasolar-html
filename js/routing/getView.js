import { validRoutes } from "./validRoutes.js";
import { views } from '../views/index.js';
export const getView = (path) => {
    const workingDirectory = location.pathname.split('/').slice(-1);
    const workingPath = '/'.concat(workingDirectory.toString());
    const matchingPath = validRoutes.find(route => route.path === workingPath);
    return matchingPath ? matchingPath.view : views.create404View();
};
