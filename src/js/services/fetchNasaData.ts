export const fetchNasaData = async (): Promise<Array<string>> => {
  return fetch('https://extrasolar-proxy-server.glitch.me/get')
    .then(res => res.json())
    .then(data =>  data)
    .catch(err => console.error(err));
};
