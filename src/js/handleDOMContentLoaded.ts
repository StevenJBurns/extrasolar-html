import { handleNavigation } from './routing/handleNavigation.js';
import { setFooterContent } from './setFooterInfo.js';
import { validPaths } from './const/validPaths.js';
import { setPageTitle } from './setPageTitle.js';
import { getView } from './routing/getView.js';
import { create404View } from './views/404.js';

export const handleDOMContentLoaded = () => {
  document.body.addEventListener('click', handleNavigation);
  setFooterContent();

  if (Object.values(validPaths).includes(location.pathname as validPaths)) {
    setPageTitle(location.pathname);
  } else {
    setPageTitle('Page Not Found');
    const main = document.querySelector('main');
    if (main) main.innerHTML = getView(create404View());
  };
};
