import { handleDOMContentLoaded } from './handleDOMContentLoaded.js';
document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
const selectDistinctSystems = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname+from+ps&format=json';
const fetchOptions = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'exoplanetarchive.ipac.caltech.edu',
    },
};
const getData = async () => await fetch(selectDistinctSystems, fetchOptions)
    .then(response => console.log(response.text()))
    .then(data => console.log(data))
    .catch(err => console.error(err));
console.log(getData());
