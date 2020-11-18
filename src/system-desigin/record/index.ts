/**
 * 写一个类，里面有record（int t）和avarage（）两个方法。
 * 调用record可以记录下当前时间点的负载均衡数，调用avarage要返回过去5分钟内的负载均衡数的平均数。
 */

class DataNode {
  value: number;
  timestamp: number;
  next: DataNode;
  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.timestamp = Date.now();
  }
}

export class Record {
  head: DataNode = new DataNode(null);

  lessThan5Mins(now: number, timestamp: number) {
    return now - timestamp <= 300000;
  }

  record(t: number) {
    const node = new DataNode(t);
    const next = this.head.next;
    node.next = next;
    this.head.next = node;
  }

  average(): number {
    let node = this.head.next;
    let pre = null;
    let max = 0;
    let count = 0;
    const now = Date.now();
    while (node) {
      if (this.lessThan5Mins(now, node.timestamp)) {
        max += node.value;
        count++;
        pre = node;
        node = node.next;
      } else {
        break;
      }
    }
    if (pre) pre.next = null;

    return count ? max / count : 0;
  }
}
