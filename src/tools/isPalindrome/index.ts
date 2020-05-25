/*
Author: Xiang Li 
Description: description
Created:  2020-05-25T15:04:16.186Z
*/

export function isPalindrome(str: string): boolean {
  const last = str.length - 1;
  const len = str.length >> 1;
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[last - i]) {
      return false;
    }
  }
  return true;
}
