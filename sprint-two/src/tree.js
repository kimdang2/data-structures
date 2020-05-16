var Tree = function(value, parent) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = parent || null;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value, this);
  this.children.push(child);
};

treeMethods.removeParent = function() {
  //check if parent exists
  //iterate through children of parent
  //  check if child's value is equal to this value
  //  if it does, splce out the child
  //set this parent to null
  if (this.parent) {
    for (var i = this.parent.children.length - 1; i >= 0; i--) {
      if (this.parent.children[i].value === this.value) {
        this.parent.children.splice(i, 1);
        break;
      }
    }
    this.parent = null;
  }
};

treeMethods.contains = function(target) {
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
