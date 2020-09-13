// 将数组的两个有序的部分合并
function merge(n: Array<number>, l: number, m: number, r: number): void {
  if (l >= r) return;

  // 创建一个长度为 r-l+1 的临时数组
  const temp = [];
  let p1 = l; // p1指向左区间头
  let p2 = m + 1; // p2指向右区间头
  while (p1 <= m && p2 <= r) {
    if (n[p1] <= n[p2]) {
      // 优先放置p1，保证原址排序
      temp.push(n[p1]);
      p1++;
    } else {
      temp.push(n[p2]);
      p2++;
    }
  }

  while (p1 <= m) {
    temp.push(n[p1]);
    p1++;
  }

  while (p2 <= r) {
    temp.push(n[p2]);
    p2++;
  }

  // 将temp拷贝回n
  for (let i = l; i <= r; i++) {
    n[i] = temp[i - l];
  }
}

/**
 * merge 函数的优化
 * 利用哨兵来简化判断逻辑
 * 代码真的比上面简介好多
 * @param n 数组
 * @param l 左边界索引
 * @param m 中间索引
 * @param r 右边界索引
 */
function mergeWithSentinel(n: Array<number>, l: number, m: number, r: number) {
  const lPart = n.slice(l, m + 1);
  const rPart = n.slice(m + 1, r + 1);
  lPart.push(Infinity);
  rPart.push(Infinity);

  for (let i = l, p1 = 0, p2 = 0; i <= r; i++) {
    if (lPart[p1] <= rPart[p2]) {
      n[i] = lPart[p1++];
    } else {
      n[i] = rPart[p2++];
    }
  }
}

function mergeSort(n: Array<number>, l: number, r: number): void {
  if (l >= r) return;

  const m = (l + r) >> 1; // 中点
  mergeSort(n, l, m); // 排序左区间
  mergeSort(n, m + 1, r); // 排序右区间

  mergeWithSentinel(n, l, m, r); // 合并两个区间
}

export default function sort(n: Array<number>): Array<number> {
  mergeSort(n, 0, n.length - 1);
  return n;
}
