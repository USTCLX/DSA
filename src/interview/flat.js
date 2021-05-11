// {a:1,’b.c’:2,’b.d’:3,’c[0]’:4,’c[1]’:5,’c[2]’:6}
const a = { a: 1, b: { c: 2, d: 3 }, c: [4, 5, 6] };

// 高级扁平化
function flat(obj, prefix = "", res = {}) {
  if (typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    obj.forEach((val, index) => {
      res[`${prefix}[${index}]`] = flat(val, `${prefix}[${index}]` + ".", res);
    });
  } else {
    Object.keys(obj).forEach(key => {
      res[`${prefix}${key}`] = flat(obj[key], `${prefix}${key}` + ".", res);
    });
  }
  return res;
}

console.log(flat(a));
