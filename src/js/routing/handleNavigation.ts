import { setPageTitle } from '../setPageTitle.js';
import { getView } from './getView.js';

export const handleNavigation = async (e: Event): Promise<void> => {
  if (e.target instanceof HTMLAnchorElement) {
    e.preventDefault();

    if (e.target.href !== location.href) {
      history.pushState({}, e.target.innerHTML, e.target.href);
      setPageTitle(e.target.innerHTML);

      const main = document.querySelector('main');
      if (main) main.innerHTML = getView(e.target.pathname);
    };
  };
};
