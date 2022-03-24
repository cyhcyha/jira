export const isFalsy = (value: unknown) => (value === 0 ? true : !value);

//在一个函数里，改变传入的对象是不好的
export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};