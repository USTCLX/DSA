import { BinaryTree } from "./index";

describe("BinaryTree", () => {
  test("should ", () => {
    const tree = new BinaryTree();
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.inOrder();

    tree.remove(2);
    tree.inOrder();
  });
});
