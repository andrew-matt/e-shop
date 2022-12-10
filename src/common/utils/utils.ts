// variables
const fractionDigits = 2;

// functions
export const priceFormatter = (price: number): string => {
  return new Intl.NumberFormat('ru-RU', { minimumFractionDigits: fractionDigits }).format(
    price,
  );
};

export const priceCountHandler = (price: number): number => {
  return +price.toFixed(fractionDigits);
};

export const convertDate = (date: Date): string => {
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};
