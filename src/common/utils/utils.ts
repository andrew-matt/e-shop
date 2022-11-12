// variables
export const fractionDigits = 2;

// functions
export const priceFormatter = (price: number): string => {
  return new Intl.NumberFormat('ru-RU', { minimumFractionDigits: fractionDigits }).format(
    price,
  );
};
