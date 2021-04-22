/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU缓存机制
 */

// @lc code=start

// 这是最朴素的实现，使用了数组，没有优化
// class LRUCache {
//   cache: number[][];
//   capacity: number;
//   constructor(capacity: number) {
//     this.cache = [];
//     this.capacity = capacity;
//   }

//   // 这里不能直接换位，而应该是取出来，放到第一个
//   // private swap(a: number, b: number): void {
//   //   if (a === b) return;
//   //   const temp = this.cache[a];
//   //   this.cache[a] = this.cache[b];
//   //   this.cache[b] = temp;
//   // }

//   // 将第i个元素移动到首位
//   private move(i: number): void {
//     if (i === 0) return;

//     // 取出来
//     const temp = this.cache.splice(i, 1)[0];

//     // 加入头部
//     this.cache.unshift(temp);
//   }

//   get(key: number): number {
//     let ans = -1;
//     const l = this.cache.length;

//     for (let i = 0; i < l; i++) {
//       if (this.cache[i][0] == key) {
//         ans = this.cache[i][1];
//         // swap
//         this.move(i);
//         break;
//       }
//     }

//     return ans;
//   }

//   put(key: number, value: number): void {
//     const l = this.cache.length;
//     for (let i = 0; i < l; i++) {
//       if (this.cache[i][0] === key) {
//         this.cache[i][1] = value;
//         // swap
//         this.move(i);
//         return;
//       }
//     }

//     if (l === this.capacity) {
//       // remove tail
//       this.cache.pop();
//     }
//     this.cache.unshift([key, value]);
//   }
// }

// class DoubleLinkNode {
//   key: number;
//   value: number;
//   prev: DoubleLinkNode | null;
//   next: DoubleLinkNode | null;
//   constructor(
//     key: number,
//     value: number,
//     prev: DoubleLinkNode | null = null,
//     next: DoubleLinkNode | null = null
//   ) {
//     this.key = key;
//     this.value = value;
//     this.prev = prev;
//     this.next = next;
//   }
// }
// class LRUCache {
//   map: Map<number, DoubleLinkNode>;
//   head: DoubleLinkNode;
//   tail: DoubleLinkNode;
//   capacity: number;
//   constructor(capacity: number) {
//     this.map = new Map();
//     this.capacity = capacity;
//     this.head = new DoubleLinkNode(-1, -1);
//     this.tail = new DoubleLinkNode(-1, -1);
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
//   }

//   private addToHead(node: DoubleLinkNode) {
//     const firstNode = this.head.next;
//     if (firstNode) {
//       firstNode.prev = node;
//       node.next = firstNode;
//       this.head.next = node;
//       node.prev = this.head;
//     }
//   }

//   private removeNode(node: DoubleLinkNode) {
//     const prevNode = node.prev;
//     const nextNode = node.next;
//     if (prevNode && nextNode) {
//       prevNode.next = nextNode;
//       nextNode.prev = prevNode;
//     }
//   }

//   get(key: number): number {
//     const node = this.map.get(key);
//     let ans = -1;
//     if (node) {
//       ans = node.value;
//       this.removeNode(node);
//       this.addToHead(node);
//     }
//     return ans;
//   }

//   put(key: number, value: number): void {
//     const node = this.map.get(key);
//     if (node) {
//       // 存在 只要更新就行了
//       node.value = value;
//       // 将node移动到头部
//       this.removeNode(node);
//       this.addToHead(node);
//     } else {
//       // 不存在需要新增
//       if (this.map.size >= this.capacity) {
//         // 满了，先删除最后一个
//         this.map.delete(this.tail.prev!.key);
//         this.removeNode(this.tail.prev!);
//       }
//       const newNode = new DoubleLinkNode(key, value);
//       this.map.set(key, newNode);
//       this.addToHead(newNode);
//     }
//   }
// }

class DoubleLink {
  key: number;
  value: number;
  next: DoubleLink | null;
  prev: DoubleLink | null;
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  map: Map<number, DoubleLink>;
  capacity: number;
  head: DoubleLink;
  tail: DoubleLink;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map<number, DoubleLink>();
    this.head = new DoubleLink(-1, -1);
    this.tail = new DoubleLink(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addToHead(node: DoubleLink) {
    if (!node) return;

    const firstNode = this.head.next;
    firstNode.prev = node;
    node.next = firstNode;
    this.head.next = node;
    node.prev = this.head;
  }

  removeNode(node: DoubleLink) {
    if (!node || !node.prev || !node.next) return;

    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (node) {
      return node.value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    let node = this.map.get(key);
    if (node) {
      // 更新node的值
      node.value = value;
    } else {
      // node不存在
      if (this.map.size >= this.capacity) {
        // 满了，需要删除一个
        const readyToDelNode = this.tail.prev;
        this.map.delete(readyToDelNode.key);
        this.removeNode(readyToDelNode);
      }
      // 新建node
      node = new DoubleLink(key, value);
      this.map.set(key, node);
    }

    // 将node更新到第一位
    this.removeNode(node);
    this.addToHead(node);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

export { LRUCache };
