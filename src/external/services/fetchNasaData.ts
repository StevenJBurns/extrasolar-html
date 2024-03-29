export type SolarSystem = {
  hostname: string;
};

export const fetchNasaData = async (): Promise<Array<SolarSystem>> => {
  console.log('fetching');
  return fetch('https://extrasolar-proxy-server.glitch.me/get')
  //return fetch('http://localhost:4000/get')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error(err));
};
