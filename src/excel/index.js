/**
AA00 = 10
AB00 = (AA00 + AA01) * 15
AA01 = 20 + AB00

AA00 = 10
AA01 = AA00 + AB00
AB00 = 15
 */

function getKeys(str) {
  const reg = /[A-Z]{2}[0-9]{2}/g;
  let result;
  const keys = [];
  while ((result = reg.exec(str))) {
    keys.push(result[0].trim());
  }
  return keys;
}

// str : AB00 = (AA00 + AA01) * 15
// str : AA00 = 10
function isValid(str, set, map) {
  if (!str) return true;
  let [key, exp] = str.split("=");
  key = key.trim();
  // 说明这个key已经解析过了，形成了循环
  if (set.has(key)) {
    return false;
  }
  set.add(key);

  const hasKey = /[A-Z]/g; // 是否含有字母，如果含有字母，就是一个关键字key

  if (hasKey.test(exp)) {
    // 这时表达式里有关键字
    // 1. 提取表达式
    const keys = getKeys(exp);
    for (let key of keys) {
      // key : AA00
      // map.get(key) : AB00 = (AA00 + AA01) * 15
      if (map.has(key)) {
        if (!isValid(map.get(key), set, map)) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    // 是一个数字，直接返回true
    return true;
  }
}

/**
 * map
 * key AA00
 * value AA00 = 10
 */

export function main(strs) {
  // 1. 收集所有的表达式的key，以及它们的表达式，存储到一个map中
  const map = new Map();
  for (let str of strs) {
    const [key] = str.split("=");
    map.set(key.trim(), str);
  }

  // 2. 遍历map, 在遍历的过程中解析，并判断当前表达式是否合法
  for (let str of strs) {
    const set = new Set();
    if (!isValid(str, set, map)) {
      return false;
    }
  }

  // 3. 如果map中的所有的项都是有效的，返回true
  return true;
}
