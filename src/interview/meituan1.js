// 手写货币的千分位

function currency(value, symol = "") {
  let v = +value; // 统一转换为number
  const isNegative = v < 0; // 判断正负
  v = Math.abs(v); // 取绝对值
  let integer = ~~v; // 取整
  const decima = (v - integer).toFixed(2).substring(1); //截取2位小数，eg:".55"
  integer = (integer + "").replace(/(?=(?!\b)(\d{3})+$)/g, ",");
  v = integer + decima;
  if (isNegative) v = "-" + v;
  return symol + v;
}

console.log(currency("12"));
console.log(currency("123"));
console.log(currency("1234"));
console.log(currency("12345"));
console.log(currency("1234567.123"));
