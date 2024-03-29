import { validRoutes } from "./validRoutes.js";
import { views } from '../pages/index.js';

export const getView = (path: string): string | Promise<string> => {  
  const workingDirectory = location.pathname.split('/').slice(-1);
  const workingPath = '/'.concat(workingDirectory.toString());
  const matchingPath = validRoutes.find(route => route.path === workingPath);

  return matchingPath ? matchingPath.view : views.create404View();
};
