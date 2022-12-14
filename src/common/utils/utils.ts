// variables
const fractionDigits = 2;

// functions
export const changePriceFormat = (price: number): string => {
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: fractionDigits }).format(
    price,
  );
};

export const priceCountHandler = (price: number): number => {
  return +price.toFixed(fractionDigits);
};

export const convertDate = (date: Date): string => {
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};
