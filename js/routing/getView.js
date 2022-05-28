import { validRoutes } from "./validRoutes.js";
import { views } from '../views/index.js';
export const getView = (path) => {
    const matchingPath = validRoutes.find(route => route.path === path);
    return matchingPath ? matchingPath.view : views.create404View();
};
