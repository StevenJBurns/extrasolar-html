import { handleNavigation } from '../routing/handleNavigation.js';
import { setFooterContent } from './setFooterInfo.js';
import { validPaths } from '../const/validPaths.js';
import { setPageTitle } from './setPageTitle.js';
import { getView } from '../routing/getView.js';
import { create404View } from '../pages/404.js';

export const handleDOMContentLoaded = async () => {
  window.addEventListener('popstate', handleNavigation);
  document.body.addEventListener('click', handleNavigation);
  setFooterContent();

  const main: HTMLElement | null = document.querySelector('main');
  if (!main) return;

  const workingDirectory = location.pathname.split('/').slice(-1);
  const workingPath = '/'.concat(workingDirectory.toString());
  
  if (Object.values(validPaths).includes(workingPath as validPaths)) {
    setPageTitle(workingPath);
    main.innerHTML = await Promise.resolve(getView(workingPath));
  } else {
    setPageTitle('Page Not Found');
    main.innerHTML = create404View();
  };
};
