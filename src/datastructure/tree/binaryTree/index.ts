export class BinNode {
  val: number;
  left: BinNode;
  right: BinNode;
  constructor(val: number) {
    this.val = val;
    this.left = this.right = null;
  }

  insertAsLC(val: number) {
    this.left = new BinNode(val);
  }

  insertAsRC(val: number) {
    this.right = new BinNode(val);
  }
}

// TODO: finish Bin Tree
export class BinTree {
  root: BinNode;

  getRoot() {
    return this.root;
  }

  size() {}
}
