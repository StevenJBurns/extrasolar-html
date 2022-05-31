import { handleDOMContentLoaded } from './handleDOMContentLoaded.js';

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

const getData = async () => await fetch('https://extrasolar-proxy-server.glitch.me/get')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

getData();
