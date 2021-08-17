export const getOnlyNumbers = (array) => {
  return array
    .map((item) => {
      return Number(item);
    })
    .filter((item) => !isNaN(item));
};
