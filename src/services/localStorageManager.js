export const setStorage = ({ key, data }) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = (key) => {
  const data = localStorage.getItem(localStorage.key(key));
  return JSON.parse(data);
};

export const clearStorage = (key) => {
  localStorage.removeItem(key);
};
