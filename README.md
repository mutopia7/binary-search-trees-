
# 🧠 Binary Search Tree (BST) in JavaScript

It includes a complete `Tree` class with methods for insertion, deletion, traversal, balancing, and more — all built using plain JavaScript with recursion.

## 🚀 Features

- Create a balanced BST from an array of values
- Insert and delete nodes recursively
- Search (`find`) for values in the tree
- Tree traversal methods:
  - `levelOrder`
  - `inOrder`
  - `preOrder`
  - `postOrder`
- Measure `height` and `depth` of nodes
- Check if the tree is `balanced`
- `rebalance()` the tree if needed

---

## 🛠️ Technologies

- 🟨 JavaScript (ES6+)
- No external libraries
- Console-based output

---

## 📂 Project Structure

```bash
📁 bst/
├── binary-search.js          # Main implementation
└── README.md       # Project description
```


## 📄 Example Usage

```js
const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);

console.log("Is Balanced:", tree.isBalanced()); // true
console.log("Level Order:", tree.levelOrder()); // [4, 2, 6, 1, 3, 5, 7]

tree.insert(100);
tree.insert(200);
tree.insert(300);

console.log("Is Balanced after insertions:", tree.isBalanced()); // false
tree.rebalance();
console.log("Is Balanced after rebalance:", tree.isBalanced()); // true
console.log("Level Order after rebalance:", tree.levelOrder());
```

## 👤 Author

Created by **Rasool Vahid**  
🔗 [GitHub](https://github.com/mutopia7)




