/**
 * 
const complexFun = (arg1, arg2) => {
console.log('run!')
return arg1 + arg2
};
const cachedFun = cacheLast(complexFun)
console.log(cachedFun(1, 2)); // run! 3
console.log(cachedFun(1, 2)); // 3
console.log(cachedFun(5, 2)); // run! 7
console.log(cachedFun(1, 2)); // run! 3
 */

const complexFun = (arg1, arg2) => {
  console.log("run!");
  return arg1 + arg2;
};

function cacheLast(cb) {
  let lastKey = null;
  let lastResult = null;

  return (...args) => {
    const cacheKey = args.toString();
    if (cacheKey === lastKey) {
      return lastResult;
    } else {
      const result = cb(...args);
      lastKey = cacheKey;
      lastResult = result;
      return result;
    }
  };
}

const cachedFun = cacheLast(complexFun);
console.log(cachedFun(1, 2)); // run! 3
console.log(cachedFun(1, 2)); // 3
console.log(cachedFun(5, 2)); // run! 7
console.log(cachedFun(1, 2)); // run! 3

/**
cachedFun = cache(complexFun)
 
console.log(cachedFun(1, 2)); // run! 3
console.log(cachedFun('1', 2)); // 3
console.log(cachedFun([1, 2, {aa: 1}], ['1', 2])); // run! 7
console.log(cachedFun(5, 2)); // 7
console.log(cachedFun(1, 2)); // 3
 */

function cache(func) {
  const map = new Map();
  return function() {
    const args = [].slice.call(arguments);
    const keys = map.entries();
    const key = keys.find(item => deepCompare(item, args));
    if (key && map.get(key)) {
      return map.get(key);
    }
    const value = func.apply(this, [].slice.call(arguments));
    map.set(key, value);
    return value;
  };
}
