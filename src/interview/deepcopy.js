function deepcopy(obj) {
  if (typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    // 数组
    const res = [];
    for (let i = 0; i < obj.length; i++) {
      res[i] = deepcopy(obj[i]);
    }
    return res;
  } else {
    // 普通对象
    const keys = Object.keys(obj);
    const res = {};
    keys.forEach(key => {
      res[key] = deepcopy(obj[key]);
    });
    return res;
  }
}

console.log(deepcopy([1, 2, 3]));
console.log(deepcopy({ a: 1, b: 2, c: [1, 2, { d: 4, e: 5 }] }));
