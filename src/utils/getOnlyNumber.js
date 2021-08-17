export const getOnlyNumbers = (array) => {
  return array
    .map((item) => {
      if (item !== '') return Number(item);
    })
    .filter((item) => !isNaN(item));
};
