import { Node } from "./node";

export class BinaryTree {
  root: Node;

  private insertNode(node: Node, key: number) {
    if (node.key > key) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else if (node.key < key) {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  private searchNode(node: Node, key: number): boolean {
    if (node == null) return false;
    if (node.key === key) {
      return true;
    } else if (node.key < key) {
      return this.searchNode(node.right, key);
    } else if (node.key > key) {
      return this.searchNode(node.left, key);
    }
  }

  private inOrderPrint(node: Node) {
    if (node == null) return;
    this.inOrderPrint(node.left);
    console.log(node.key);
    this.inOrderPrint(node.right);
  }

  insert(key: number): void {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  search(key: number): boolean {
    return this.searchNode(this.root, key);
  }

  /**
   * 1. 需要记录当前节点的前驱节点，来进行删除操作
   * 2. 如果当前节点没有左右子树，则直接把前驱节点的left或者right置为null
   * 3. 如果当前节点只有左子树或者只有右子树，则直接把前驱节点的left或者right置为其左子树或者右子树
   * 4. 如果当前节点既有左子树也有右子树，则把其右子树中的最小值的key，赋值给当前节点，然后将这个最小值（不可能有左子树），执行2、3操作
   */
  remove(key: number): void {
    let p: Node = this.root; // 只向要删除的节点
    let pp: Node = null;

    // 先找到要删除的节点p
    while (p !== null && p.key !== key) {
      pp = p;
      if (p.key > key) {
        p = p.left;
      } else {
        p = p.right;
      }
    }
    if (p == null) return;

    // case1 要删除的节点有两个子节点
    // 需要找到右子树中的最小节点
    if (p.left != null && p.right != null) {
      let minP = p.right;
      let minPP = p;
      while (minP.left != null) {
        minPP = minP;
        minP = minP.left;
      }
      // 找到右子树中最小的节点，交换其和p节点的值
      p.key = minP.key;

      // 后面p就是只有一个子节点。
      p = minP;
      pp = minPP;
    }

    // 删除节点只有一个子节点或者没有子节点，确定child的值
    let child: Node = null;
    if (p.left != null) {
      child = p.left;
    } else if (p.right != null) {
      child = p.right;
    } else {
      child = null;
    }

    if (pp === null) {
      this.root = child;
    } else if (pp.right === p) {
      pp.right = child;
    } else if (pp.left === p) {
      pp.left = child;
    }
  }

  inOrder() {
    this.inOrderPrint(this.root);
  }
}
