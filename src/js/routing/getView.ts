import { validRoutes } from "./validRoutes.js";
import views from '../views/index.js';

export const getView = (path: string): string => {
  return validRoutes.find(route => route.path === path)?.view ?? views.create404View();
};
