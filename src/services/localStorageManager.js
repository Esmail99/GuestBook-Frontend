export const setStorage = ({ key, data }) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = (key) => {
  const data = localStorage.getItem(localStorage.key(key));
  if (data) {
    return JSON.parse(data);
  } else {
    return undefined;
  }
};

export const clearStorage = (key) => {
  localStorage.removeItem(key);
};
