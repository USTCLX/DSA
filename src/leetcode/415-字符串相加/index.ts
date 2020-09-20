/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
export const addStrings = function(num1: string, num2: string) {
  let count1 = num1.length - 1;
  let count2 = num2.length - 1;

  let over = false;
  let res = "";
  while (count1 >= 0 || count2 >= 0 || over) {
    let plus: any = Number(num1[count1] || 0) + Number(num2[count2] || 0);
    plus = over ? plus + 1 : plus;
    plus = String(plus);

    res = plus.substr(-1, 1) + res;

    if (plus.length > 1) {
      over = true;
    } else {
      over = false;
    }

    count1--;
    count2--;
  }

  return res;
};

export const addStrings2 = function(num1: string, num2: string) {
  let count1 = num1.length - 1;
  let count2 = num2.length - 1;
  let add = 0;
  const res = [];
  while (count1 >= 0 || count2 >= 0 || add) {
    // 这里对count进行判断，小于0直接返回1，并且利用了字符串减法，自动转换数字的特性。
    const n1 = count1 >= 0 ? num1.charAt(count1) - "0" : 0;
    const n2 = count2 >= 0 ? num2.charAt(count2) - "0" : 0;

    const n = n1 + n2 + add;
    res.push(n % 10); // 只保留个位数

    add = Math.floor(n / 10);
  }

  return res.reverse().join("");
};
