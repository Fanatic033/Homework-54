const createItems = () => {
  const items = Array.from({length: 36}, () => ({
    hasItem: false,
    clicked: false
  }));

  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex].hasItem = true;
  return items;
};

export default createItems;