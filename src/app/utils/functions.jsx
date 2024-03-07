export const earningsCalculator = (array1, array2) => {
  const regexAmount = /£([\d,]+)/g;
  const priceEarnings = array1.interest.match(regexAmount);
  const removePound = priceEarnings[0].slice(1, priceEarnings[0].length);
  array2.push(removePound);
};
