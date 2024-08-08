/* eslint-disable no-plusplus */
const generateUniqueId = () => {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 10000000000) + Math.random();
  return `id-${timestamp}-${randomNum}`;
};

const multipleArray = (array: any[], time: number = 1) => {
  let doubledArray: any[] = [...array];

  for (let i = 0; i < time; i++) {
    doubledArray = doubledArray.concat(array);
  }

  return doubledArray;
};

export { generateUniqueId, multipleArray };
