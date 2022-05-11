import { pageConstants } from "./const/pages.js";

export const createNav = (currentNavElement: HTMLElement | null) => {
  pageConstants.forEach(page => {
    const newLink = document.createElement('a');
    newLink.setAttribute('href', page.url);
    newLink.innerHTML = page.title;

    currentNavElement?.appendChild(newLink);
  });
};
