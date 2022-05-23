import { HeaderNav } from './components/header-nav.js';
import { SiteFooter } from './components/site-footer.js';
import { handleNavigation } from './routing/handleNavigation.js';
import { setFooterContent } from './setFooterInfo.js';

customElements.define('header-nav', HeaderNav);
customElements.define('site-footer', SiteFooter);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', handleNavigation);
  setFooterContent();
});

window.addEventListener('popstate', handleNavigation);
