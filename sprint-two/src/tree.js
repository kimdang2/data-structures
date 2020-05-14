var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // invoke tree and assign the tree to value
  // push the new tree to newTree.children

  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  /* base case: compare this.value to target and return true if match
     otherwise, traverse children
      pass child through contains
    return false if no matches
  */
  var contains = false;

  if (this.value === target) {
    contains = true;
  }

  var children = this.children;

  _.each(children, function(child) {
    contains = contains || child.contains(target);
  });

  return contains;
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild - O(1)
 contains - O(n)
 */
