import { validPaths, pageTitles } from '../const/index.js'; 
import { views } from '../views/index.js';

type Route = {
  path: string,
  title: string,
  view: Promise<string> | string,
};

export const validRoutes: Array<Route> = [
  {
    path: validPaths.root,
    title: pageTitles.root,
    view: views.createHomeView(),
  },
  {
    path: validPaths.data,
    title: pageTitles.data,
    view: views.createDataView(),
  },
  {
    path: validPaths.systems,
    title: pageTitles.systems,
    view: new Promise<string>(resolve => resolve(views.createSystemsView())),
  },
  {
    path: validPaths.about,
    title: pageTitles.about,
    view: views.createAboutView(),
  },
];
