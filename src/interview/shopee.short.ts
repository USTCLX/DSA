// elephant-walk  =>  e6t-w2k，

export function shortStr(str: string, maxLen: number = 4) {
  if (!str || str.length < maxLen) return str;

  const head = str[0];
  const tail = str[str.length - 1];

  return `${head}${str.length - 2}${tail}`;
}
