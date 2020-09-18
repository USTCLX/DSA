export class Node {
  key: number;
  left: Node;
  right: Node;
  constructor(key: number, left: Node = null, right: Node = null) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}
