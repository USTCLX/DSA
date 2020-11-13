const DELIMITER = /[\s>+]+/g;
const ID_SELECTOR = /^#/g; // ID选择器 1000
const CLASS_SELECTOR = /^\./g; // 类选择器 100
const PSEUDO_CLASS_SELECTOR = /\w+:\w+/g; // 伪类选择器 100
const PROPS_SELECTOR = /\[\w+=\w+\]/g; // 属性选择器
const PSEUDO_ELEMENT_SELECTOR = /\w+::\w+/g; // 伪元素选择器 10

function calcPriority(selector: string): number {
  if (!selector) return 0;

  const keys = selector.split(DELIMITER);

  return keys.reduce((priority, key) => {
    if (!key) return priority;
    key = key.trim();
    let current: number = 0;
    if (ID_SELECTOR.test(key)) {
      // id
      current += 1000;
    } else if (CLASS_SELECTOR.test(key)) {
      // class
      current += 100;
    } else {
      // 元素
      current += 10;
    }

    if (PSEUDO_CLASS_SELECTOR.test(key) || PROPS_SELECTOR.test(key)) {
      current += 100;
    }
    if (PSEUDO_ELEMENT_SELECTOR.test(key)) {
      current += 10;
    }

    return priority + current;
  }, 0);
}

export function compare(a: string, b: string): number {
  let priority_a = calcPriority(a);
  let priority_b = calcPriority(b);

  return priority_a - priority_b;
}
