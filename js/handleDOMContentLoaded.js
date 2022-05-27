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
    const main = document.querySelector('main');
    if (!main)
        return;
    if (Object.values(validPaths).includes(location.pathname)) {
        setPageTitle(location.pathname);
        main.innerHTML = getView(location.pathname);
    }
    else {
        setPageTitle('Page Not Found');
        main.innerHTML = create404View();
    }
    ;
};
