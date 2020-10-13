export function bfs(node: any) {
  if (!node) return;
  const visited = new Set();
  const queue = [];
  queue.push(node);

  while (queue.length) {
    const curNode = queue.shift();
    if (!visited.has(curNode)) {
      visited.add(curNode);
      // print
      for (let child of curNode) {
        queue.push(child);
      }
    }
  }
}
