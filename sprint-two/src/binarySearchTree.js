var BinarySearchTree = function(value) {
  //init left and right pointers
  var bst = Object.create(bstMethods);

  bst.value = value;
  bst.left = null;
  bst.right = null;

  return bst;
};

var bstMethods = {};

//TO DO: insert
bstMethods.insert = function(value) {
  /*check top of the tree and check if its higher or lower
      if value > root, explore right subtree
      otherwise, explore left subtree
  */
  var root = this;

  while (root !== null) {
    if (value < root.value) {
      if (root.left === null) {
        root.left = BinarySearchTree(value);
        return;
      }
      root = root.left;
    } else {
      if (root.right === null) {
        root.right = BinarySearchTree(value);
        return;
      }
      root = root.right;
    }
  }
};


//TO DO: contains
bstMethods.contains = function (value) {
  var contains = false;
  if (this.value === value) { return true; }

  if (value < this.value) {
    if (!contains && this.left) {
      contains = this.left.contains(value);
    }
  } else {
    if (!contains && this.right) {
      contains = this.right.contains(value);
    }
  }
  return contains;
};


// //TO DO: depth first log
bstMethods.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) { this.left.depthFirstLog(cb); }
  if (this.right) { this.right.depthFirstLog(cb); }
};



// /*
//  * Complexity: What is the time complexity of the above functions?
//  */