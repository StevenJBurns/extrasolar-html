import { handleDOMContentLoaded } from './handleDOMContentLoaded.js';
import { handleNavigation } from './routing/handleNavigation.js';

console.log({location});

if (!['127.0.0.1', 'localhost'].includes(location.hostname)) {
  const base: HTMLBaseElement = document.createElement('base');
  base.href = 'https://stevenjburns.github.io/extrasolar-html/';
  document.head.appendChild(base);
};

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

window.addEventListener('popstate', handleNavigation);

