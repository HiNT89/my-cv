export const convertText = (text: string, number = 90) => {
  let result: string = text;
  if (text.length > number) {
    result = text.slice(0, number) + " ...";
  }
  return result;
};
