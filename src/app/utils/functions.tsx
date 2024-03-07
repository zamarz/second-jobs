export const earningsAggregator = (array1: any, array2: any) => {
  const regexAmount = /£([\d,]+)/g;
  const priceEarnings = array1.interest.match(regexAmount);

  if (priceEarnings !== null) {
    const removePound = priceEarnings[0].slice(1, priceEarnings[0].length);
    array2.push(removePound);
  }
};

export const sumEarnings = (arrayofEarnings: any, stateFunction: any) => {
  const newEarnings = arrayofEarnings.map((earning: any) => {
    return parseFloat(earning.replace(/,/g, ""));
  });

  const addEarnings = newEarnings.reduce((a: number, b: number) => a + b);

  stateFunction(addEarnings);
};
