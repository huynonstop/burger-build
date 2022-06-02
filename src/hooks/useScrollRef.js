export const useScrollRef = (el) => {
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'end',
    });
  }
};
