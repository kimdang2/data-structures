var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    top++;
    storage[top] = value;
  };

  someInstance.pop = function() {
    var popped = storage[top];
    top -= 1;
    return popped;
  };

  someInstance.size = function() {
    if (top < 1) {
      return 0;
    }
    return top;
  };

  return someInstance;
};
