import { setPageTitle } from './setPageTitle.js';
import { HeaderNav } from './components/header-nav.js';

setPageTitle(window.document);

customElements.define('header-nav', HeaderNav);
