export default function replaceSpace(str: Array<string>): Array<string> {
  if (str.length === 0) return str;

  let spaceCnts = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      spaceCnts++;
    }
  }
  if (spaceCnts === 0) return str;

  const newLength = str.length + spaceCnts * 2;

  let p1 = str.length - 1;
  let p2 = newLength - 1;

  while (p1 >= 0 && p1 < p2) {
    if (str[p1] === " ") {
      str[p2--] = "0";
      str[p2--] = "2";
      str[p2--] = "%";
    } else {
      str[p2--] = str[p1];
    }

    p1--;
  }

  return str;
}
