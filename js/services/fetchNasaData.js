export const createSystemsView = async () => {
    const getData = async () => {
        return fetch('https://extrasolar-proxy-server.glitch.me/get')
            .then(res => res.json())
            .then(data => {
            console.log(data);
            return data;
        })
            .catch(err => console.error(err));
    };
    await getData();
};
