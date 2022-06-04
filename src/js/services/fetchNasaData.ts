export type SolarSystem = {
  hostname: string;
};

export const fetchNasaData = async (): Promise<Array<SolarSystem>> => {
  return fetch('https://extrasolar-proxy-server.glitch.me/get')
    .then(res => res.json())
    .then(data =>  data)
    .catch(err => console.error(err));
};
