/*
Author: Xiang Li 
Description: description
Created:  2020-05-25T15:14:57.640Z
*/

import { isPalindrome } from "../../tools/isPalindrome";

export function isPalidromeByCutOneChar(str: string): boolean {
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      break;
    }
  }

  if (left < right) {
    if (isPalindrome(str.slice(left + 1, right + 1))) {
      return true;
    } else if (isPalindrome(str.slice(left, right))) {
      return true;
    }
    return false;
  } else {
    return true;
  }
}
