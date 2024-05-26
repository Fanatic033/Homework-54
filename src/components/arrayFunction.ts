const arrayFunction = () => {
  const ObjectArray = Array.from({length: 36}, () => ({
    hasItem: false,
    clicked: false
  }));

  const randomIndex = Math.floor(Math.random() * 36);
  ObjectArray[randomIndex].clicked = true;
  return ObjectArray;
};

export default arrayFunction;