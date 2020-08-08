function isLegal(str: string[], right: number): boolean {
  if (
    str.length >= 3 &&
    str[right - 1] === str[right - 2] &&
    str[right - 2] === str[right - 3]
  ) {
    // AAA
    return false;
  } else if (
    str.length >= 4 &&
    str[right - 1] === str[right - 2] &&
    str[right - 3] === str[right - 4]
  ) {
    // AABB
    return false;
  }

  return true;
}

function convertToLegal(str: string): string {
  const resultArr = [];
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    resultArr[j++] = str[i];
    if (!isLegal(resultArr, j)) {
      j--;
    }
  }
  return resultArr.slice(0, j).join("");
}

export default convertToLegal;
