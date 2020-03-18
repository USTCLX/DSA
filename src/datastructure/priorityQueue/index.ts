import swap from "../../tools/swap";

export default class PriorityQueue {
  arr: number[];
  size: number;
  constructor() {
    this.arr = [];
    this.arr[0] = null;
    this.size = 0;
  }
  less(i: number, j: number) {
    return this.arr[i] < this.arr[j];
  }
  add(t: number) {
    this.arr.push(t);
    this.size++;
    this.swim(this.size);
  }
  max(): number {
    return this.arr[1];
  }
  delMax(): number {
    swap(this.arr, 1, this.size);
    const max = this.arr.pop();
    this.size--;
    this.sink(1);
    return max;
  }
  swim(i: number) {
    while (i > 1) {
      let p = i >> 1;
      if (this.arr[i] > this.arr[p]) {
        swap(this.arr, i, p);
        i = p;
      }
    }
  }
  sink(i: number) {
    while (2 * i < this.size) {
      let j = 2 * i;
      if (this.less(j, j + 1)) j++;
      if (this.less(i, j)) {
        swap(this.arr, i, j);
        i = j;
      } else {
        break;
      }
    }
  }
}
