type SolarSystem = {
  hostname: string;
};

export const createSystemsView = async () => {
  const getData = async (): Promise<Array<SolarSystem>> => {
    return fetch('https://extrasolar-proxy-server.glitch.me/get')
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.error(err));
  };

  const data: Array<SolarSystem> = await getData();

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
