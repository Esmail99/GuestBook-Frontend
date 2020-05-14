export const setStorage = ({ key, data }) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getStorage = (key) => {
  try {
    const data = localStorage.getItem(localStorage.key(key));
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
};

export const clearStorage = (key) => {
  localStorage.removeItem(key);
};
