import { handleNavigation } from './routing/handleNavigation.js';
import { setFooterContent } from './setFooterInfo.js';
import { validPaths } from './const/validPaths.js';
import { setPageTitle } from './setPageTitle.js';
import { getView } from './routing/getView.js';
import { create404View } from './views/404.js';
export const handleDOMContentLoaded = () => {
    document.body.addEventListener('click', handleNavigation);
    const main = document.querySelector('main');
    setFooterContent();
    if (Object.values(validPaths).includes(location.pathname)) {
        setPageTitle(location.pathname);
        if (main)
            main.innerHTML = getView(create404View());
    }
    else {
        setPageTitle('Page Not Found');
        if (main)
            main.innerHTML = getView(create404View());
    }
    ;
};
