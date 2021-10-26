interface TreeData {
  title: string;
  value: string;
  children?: TreeData[];
}

export class TrieNode {
  constructor(
    public value: string = "",
    public path: string = "",
    public isLeaf: boolean = false,
    public isRoot: boolean = false,
    public children: TrieNode[]
  ) {}
}

export class TrieTree {
  root: TrieNode;
  constructor(data: string[] = []) {
    this.root = new TrieNode("*", "", false, true, []);

    data.forEach(item => {
      this.insert(item.split("."));
    });
  }

  findNode(node: TrieNode, key: string) {
    if (!key) return null;
    if (!node || !node.children?.length) return null;

    return node.children.find(child => child.value === key);
  }

  insert(keys: string[]) {
    let node = this.root;
    const paths = [];
    for (const key of keys) {
      paths.push(key);
      let child = this.findNode(node, key);
      if (!child) {
        child = new TrieNode(key, paths.join("."), false, false, []);
        node.children.push(child);
      }
      node = child;
    }
    node.isLeaf = true;
  }

  getValue() {
    const treeData: TreeData[] = [];

    const dfs = (node: TrieNode, treeData: TreeData[]) => {
      if (!node) return;

      const data: TreeData = {
        title: node.value,
        value: node.isRoot
          ? node.value
          : node.isLeaf
          ? node.path
          : node.path + ".*"
      };

      if (node.children?.length) data.children = [];

      treeData.push(data);

      for (const child of node.children) {
        dfs(child, data.children);
      }
    };

    dfs(this.root, treeData);

    return treeData;
  }
}
