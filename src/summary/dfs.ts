export function dfs(node: any, visited: any) {
  if (!node) return;

  visited.add(node);

  // print
  console.log(node);

  for (let child of node.chindren()) {
    if (!visited.has(child)) {
      dfs(child, visited);
    }
  }
}
