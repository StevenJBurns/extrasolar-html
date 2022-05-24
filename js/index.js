import { handleDOMContentLoaded } from './handleDOMContentLoaded.js';
import { handleNavigation } from './routing/handleNavigation.js';
console.log({ location });
if (!['127.0.0.1', 'localhost'].includes(location.hostname)) {
    const base = document.createElement('base');
    base.href = '/';
    document.head.appendChild(base);
}
;
document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
window.addEventListener('popstate', handleNavigation);
