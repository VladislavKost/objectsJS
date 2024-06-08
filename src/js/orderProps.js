export const orderByProps = (obj, order) => {
  const result = [];
  const orderedObjProperty = Object.keys(obj)
    .filter((el) => !order.includes(el))
    .sort();
  const finalOrder = [...order, ...orderedObjProperty];
  for (const property of finalOrder) {
    result.push({ key: property, value: obj[property] });
  }
  return result;
};
