import { SolarSystem, fetchNasaData } from '../services/fetchNasaData.js';

export const createSystemsView = async () => {
  const data: Array<SolarSystem> = await fetchNasaData();

  const ul = document.createElement('ul');

  data.sort().forEach((system: SolarSystem) => {
    const li = document.createElement('li');
    li.innerHTML = system.hostname;
    ul.appendChild(li);
  });

  return `
    <section>
      <h1>Systems</h1>
      <hr />
      ${ul.outerHTML}
    </section>
  `
};
