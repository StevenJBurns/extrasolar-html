// import { HeaderNav } from './components/header-nav.js';
// import { SiteFooter } from './components/site-footer.js';
import { handleDOMContentLoaded } from './handleDOMContentLoaded.js';
import { handleNavigation } from './routing/handleNavigation.js';
// customElements.define('header-nav', HeaderNav);
// customElements.define('site-footer', SiteFooter);
document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
window.addEventListener('popstate', handleNavigation);
