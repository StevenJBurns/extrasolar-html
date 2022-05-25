import { handleNavigation } from './routing/handleNavigation.js';
import { setFooterContent } from './setFooterInfo.js';
import { validPaths } from './const/validPaths.js';
import { setPageTitle } from './setPageTitle.js';
import { getView } from './routing/getView.js';
import { create404View } from './views/404.js';

export const handleDOMContentLoaded = () => {
  window.addEventListener('popstate', handleNavigation);
  document.body.addEventListener('click', handleNavigation);
  setFooterContent();

  const main: HTMLElement | null = document.querySelector('main');

  if (main && Object.values(validPaths).includes(location.pathname as validPaths)) {
    setPageTitle(location.pathname);
    main.innerHTML = getView(create404View());
  } else {
    setPageTitle('Page Not Found');
    if (main) main.innerHTML = getView(create404View());
  };
};
