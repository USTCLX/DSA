const deepClone = (obj: any) => {
  if (typeof obj !== "object" || obj == null) return obj;

  const copy: any = obj.constructor === Array ? [] : {};

  Object.keys(obj).forEach(key => {
    copy[key] = deepClone(obj[key]);
  });

  return copy;
};

export default deepClone;
