export const validateString = (str, words) => {
  const regex = new RegExp('^(' + words.join('|') + ')$')
  return regex.test(str)
}

export const isPositiveInteger = string => Number.isInteger(Number(string)) && Number(string) > 0;

export const incrementProperty = (obj, key) =>{
  const currentValue = obj[key];
  const updatedObject = {
    ...obj,
    [key]: currentValue + 1
  };

  return updatedObject;
}