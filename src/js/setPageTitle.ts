export const setPageTitle = (newTitle: string): void => {
  let modifiedTitle: string = newTitle;

  if (newTitle.charAt(0) === '/') modifiedTitle = newTitle.slice(1);

  if (modifiedTitle) {
    modifiedTitle = modifiedTitle[0].toUpperCase() + modifiedTitle.slice(1);
  } else {
    modifiedTitle = 'Home'
  };

  document.title = `ExtraSolar \u2022 ${modifiedTitle}`;
};
