var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var head = 0;
  var tail = 0;
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail += 1;
  };

  someInstance.dequeue = function() {
    var popped = storage[head];
    head = head + 1;
    return popped;
  };

  someInstance.size = function() {
    return tail - head > 0 ? tail - head : 0;
  };

  return someInstance;
};