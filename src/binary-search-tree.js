const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');
const {assert} = require("chai");

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    return this.tree?this.tree:null
  }

  add(data) {
    this.tree = this._addNewItem(this.tree, data)
  }

  _addNewItem (tree, data) {
    if (!tree) {
      return new Node(data)
    }
    else if (data < tree.data) {
      tree.left = this._addNewItem(tree.left, data)
    }
    else if (data > tree.data) {
      tree.right = this._addNewItem(tree.right, data)
    }
    return tree
  }

  has(data) {
    return !!this._findNode(this.tree, data)
  }

  find(data) {
    return this._findNode(this.tree, data)
  }

  _findNode (tree, data) {
    if (tree === null) {
      return tree
    }
    if (tree.data === data) {
      return tree
    }
    else if (data < tree.data) {
      return this._findNode(tree.left, data)
    }
    else if (data > tree.data) {
      return this._findNode(tree.right, data)
    }
    return tree
  }

  remove(data) {
    this.tree = this._remove(this.tree, data)
  }

  _remove(tree, data) {
    if (tree === null) {
      return tree
    }
    if (data < tree.data) {
      tree.left = this._remove(tree.left, data)
    }
    else if (data > tree.data) {
      tree.right = this._remove(tree.right, data)
    }
    else if (tree.left && tree.right) {
      tree.data = this._min(tree.right).data
      tree.right = this._remove(tree.right, tree.data)
    }
    else {
      if (tree.left) {
        tree = tree.left
      }
      else if (tree.right) {
        tree = tree.right
      }
      else {
        tree = null
      }
    }
    return tree
  }

  min() {
    return this._min(this.tree).data
  }

  _min(tree) {
    if (tree.left == null){
      return tree
    }
    return this._min(tree.left)
  }

  max() {
    return this._max(this.tree).data
  }

  _max (tree) {
    if (tree.right == null){
      return tree
    }
    return this._max(tree.right)
  }
}

module.exports = {
  BinarySearchTree
};