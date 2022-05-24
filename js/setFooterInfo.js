export const setFooterContent = () => {
    const footer = document.querySelector('footer');
    const footerText = document.createTextNode(`\u00A9 ${new Date().getFullYear()} Steven J Burns`);
    const h4 = document.createElement('h4');
    h4.appendChild(footerText);
    footer?.appendChild(h4);
};
