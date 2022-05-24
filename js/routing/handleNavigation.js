import { setPageTitle } from '../setPageTitle.js';
import { getView } from './getView.js';
export const handleNavigation = async (e) => {
    if (e.target instanceof HTMLAnchorElement) {
        e.preventDefault();
        console.log({ location });
        if (e.target.href !== location.href) {
            history.pushState({}, e.target.innerHTML, e.target.href);
            setPageTitle(e.target.innerHTML);
            const main = document.querySelector('main');
            if (main)
                main.innerHTML = getView(e.target.pathname); //`<h2>${e.target.innerHTML}</h2>`;
        }
        ;
    }
    ;
};
