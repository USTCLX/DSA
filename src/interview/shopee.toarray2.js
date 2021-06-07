// '[]' => []
// '[1, 2, 3]' => [1, 2, 3]
// '[1, 2, 3, [4, 5]]' => [1, 2, 3, [4, 5]] (advanced)

function toArray(str) {
  let stack = [];
  let top = null; // 记录当前栈顶的元素
  let pop = null; // 记录上一次pop出来的元素（最后pop出来的就是最外层的数组了）
  let i = 0;
  while (i < str.length) {
    if (str[i] === "[") {
      const array = [];
      if (!top) {
        top = array;
      } else {
        top.push(array);
        top = array;
      }
      stack.push(top);
    } else if (str[i] === "]") {
      pop = stack.pop();
      top = stack[stack.length - 1];
    } else if (/\d/g.test(str[i])) {
      // 是数字
      let temp = str[i];
      while (/\d/g.test(str[i + 1])) {
        temp += str[i + 1];
        i = i + 1;
      }
      top.push(Number(temp));
    }

    i++;
  }
  return pop;
}

console.log(toArray("[]"));
console.log(toArray("[1, 2, 3]"));
console.log(toArray("[1, 2, 3, [4, 5]]"));
