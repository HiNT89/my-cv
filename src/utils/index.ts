export const convertText = (text: string, number = 80) => {
  let result: string = text;
  if (text.length > number) {
    result = text.slice(0, number) + " ...";
  }
  return result;
};
