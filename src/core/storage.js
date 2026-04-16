export const getProgress = (topic) => {
  return JSON.parse(localStorage.getItem(topic));
};

export const setProgress = (topic, index) => {
  localStorage.setItem(topic, JSON.stringify(index));
};