import { handleDOMContentLoaded } from './handleDOMContentLoaded.js';
document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
// const selectDistinctSystems = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname+from+ps&format=json';
const getData = async () => await fetch('https://extrasolar-proxy-server.glitch.me/get')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
getData();
