// 数字千分位加逗号
function format(str) {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(format("1000000000"));
console.log(format("1000000000.0000"));
