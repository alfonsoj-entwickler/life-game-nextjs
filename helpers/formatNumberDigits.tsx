export const formatNumberDigits = (digit: number, format: number = 1) => {
  return digit.toString().length === 1 ? "0".repeat(format) + digit : digit;
};
