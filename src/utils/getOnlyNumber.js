export const getOnlyNumbers = (array) => {
  return array
    .map((number) => parseInt(number))
    .filter((number) => !isNaN(number));
};
