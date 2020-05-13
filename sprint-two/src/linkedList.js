var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //check if tail is empty
    //  if empty set head and tail to node
    //otherwise have current tails reference point to the new node
    //set tail to node
    var node = Node(value);
    if (list.tail == null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    //store current head
    //reassign head to next node
    //return removed head
    var removedHead = list.head;
    list.head = list.head.next;
    return removedHead.value;
  };

  list.contains = function(target) {
    //if list is empty return false
    //traverse linked list
    //  if current value is equal to target return true
    //otherwise return false
    if (list.head === null && list.tail === null) {
      return false;
    }
    var currentNode = list.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      if (currentNode.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
