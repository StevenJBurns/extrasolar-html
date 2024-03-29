import { SolarSystem, fetchNasaData } from '../../external/services/fetchNasaData.js';

export const createSystemsView = async () => {
  console.log('creating SystemsView');
  const data: Array<SolarSystem> = await fetchNasaData();

  const ul = document.createElement('ul');

  data.sort((a, b) => a.hostname > b.hostname ? 1 : -1)
    .forEach((system: SolarSystem) => {
      const li = document.createElement('li');
      li.innerHTML = system.hostname;
      ul.appendChild(li);
    }
  );

  return `
    <section style="padding: 2rem">
      <h1>Systems Stuff</h1>
      <hr />
      ${ul.outerHTML}
    </section>
  `
};
