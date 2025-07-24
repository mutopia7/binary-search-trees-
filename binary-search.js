class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function buildTree(array) {
  const uniqueSorted = [...new Set(array)].sort((a, b) => a - b);

  function buildRecursive(arr) {
    if (arr.length === 0) return null;
    const mid = Math.floor(arr.length / 2);
    const root = new Node(arr[mid]);
    root.left = buildRecursive(arr.slice(0, mid));
    root.right = buildRecursive(arr.slice(mid + 1));
    return root;
  }

  return buildRecursive(uniqueSorted);
}

class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }

  insert(value, node = this.root) {
    if (!node) return new Node(value);
    if (value < node.value) {
      node.left = this.insert(value, node.left);
    } else if (value > node.value) {
      node.right = this.insert(value, node.right);
    }
    return node;
  }

  delete(value, node = this.root) {
    if (!node) return null;
    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let temp = node.right;
      while (temp.left) temp = temp.left;
      node.value = temp.value;
      node.right = this.delete(temp.value, node.right);
    }
    return node;
  }

  find(value, node = this.root) {
    if (!node) return null;
    if (value === node.value) return node;
    if (value < node.value) return this.find(value, node.left);
    else return this.find(value, node.right);
  }

  levelOrder(callback) {
    const result = [];
    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      if (callback) callback(node);
      else result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return callback ? undefined : result;
  }

  inOrder(node = this.root, result = []) {
    if (!node) return result;
    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);
    return result;
  }

  preOrder(node = this.root, result = []) {
    if (!node) return result;
    result.push(node.value);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
    return result;
  }

  postOrder(node = this.root, result = []) {
    if (!node) return result;
    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.value);
    return result;
  }

  height(node = this.root) {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  depth(node, current = this.root, depthLevel = 0) {
    if (!current) return -1;
    if (node === current) return depthLevel;
    if (node.value < current.value) return this.depth(node, current.left, depthLevel + 1);
    else return this.depth(node, current.right, depthLevel + 1);
  }

  isBalanced(node = this.root) {
    if (!node) return true;
    const left = this.height(node.left);
    const right = this.height(node.right);
    return (
      Math.abs(left - right) <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    );
  }

  rebalance() {
    const sorted = this.inOrder();
    this.root = buildTree(sorted);
  }
}


// test

const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
console.log("Is Balanced:", tree.isBalanced());
console.log("Level Order:", tree.levelOrder());
console.log("Preorder:", tree.preOrder());
console.log("Postorder:", tree.postOrder());

tree.insert(100);
tree.insert(200);
tree.insert(300);

console.log("Is Balanced after insertions:", tree.isBalanced());
tree.rebalance();
console.log("Is Balanced after rebalance:", tree.isBalanced());
console.log("Level Order after rebalance:", tree.levelOrder());
