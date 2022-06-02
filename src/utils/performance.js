export const debounced = (cb, timeout) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(cb, timeout, ...args);
  };
};
