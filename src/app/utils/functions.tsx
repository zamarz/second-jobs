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

export const hoursAggregator = (array1: any, array2: any) => {
  const regexHours = /Hours: (\d+(?:\.\d+)?)(?: hrs| mins|hours| hr)/;
  const hoursMatch = array1.interest.match(regexHours);

  if (hoursMatch) {
    const number = parseFloat(hoursMatch[1]);
    const containsMinutes = array1.interest.includes("mins");
    const hours = containsMinutes ? number / 60 : number;
    array2.push(hours);
  }
};

export const sumHours = (arrayofHours: any, stateFunction: any) => {
  const newHours = arrayofHours.map((hour: string) => {
    return parseFloat(hour);
  });

  const addHours = newHours.reduce((a: number, b: number) => a + b);

  stateFunction(addHours);
};

export const valueAggregator = (array1: any, array2: any) => {
  const regexValue = /(donation in kind:| value:|value) £(\d+(?:\.|,\d+)?)/;
  const valueMatch = array1.interest.match(regexValue);
  console.log(valueMatch);
  if (valueMatch) {
    const number = valueMatch[2];

    array2.push(number);
  }
};

export const valueSum = (arrayofValues: any, stateFunction: any) => {
  const newValues = arrayofValues.map((value: string) => {
    return parseFloat(value.replace(/,/g, ""));
  });

  const addValues = newValues.reduce((a: number, b: number) => a + b);

  stateFunction(addValues);
};
