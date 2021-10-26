// key: "1.dewdecdsc"
// nodeLabel: "1.dewdecdsc"
// title: "dewdecdsc"
// value: "1.dewdecdsc"

interface DeepArray<T> extends Array<T | DeepArray<T>> {}

type Node = {
  children?: Node[];
  key: string;
  nodeLabel: string;
  title: string;
  value: string;
};

class TrieNode {
  children: Map<string, TrieNode> = new Map();
  key = "";
  nodeLabel = "";
  value = "";
  isLeaf = false;
  constructor(public isRoot: boolean = false, public title = "") {}
}

export class TrieTree {
  root: TrieNode = new TrieNode(true, "*");

  constructor(data: string[][] = []) {
    data.forEach(item => this.insert(item));
  }

  insert(paths: string[]): void {
    let node = this.root;
    const prefix = [];
    for (const path of paths) {
      prefix.push(path);
      if (!node.children.has(path)) {
        const treeNode = new TrieNode();
        treeNode.key = treeNode.nodeLabel = treeNode.value = prefix.join(".");
        treeNode.title = path;
        node.children.set(path, treeNode);
      }
      node = node.children.get(path);
    }
    node.isLeaf = true;
  }

  toArray(): DeepArray<Node> {
    const res: DeepArray<Node> = [];

    const dfs = (node: TrieNode, res: DeepArray<Node>): void => {
      if (!node) return;
      const { title, value, children, isLeaf, isRoot } = node;
      const v = isRoot ? "*" : isLeaf ? value : value + ".*";
      const top: Node = { title, key: v, nodeLabel: v, value: v };
      res.push(top);

      if (node.children.size) top.children = [];
      for (const child of children.values()) {
        dfs(child, top.children);
      }
    };

    dfs(this.root, res);

    return res;
  }
}
