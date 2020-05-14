var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.head = 0;
  instance.tail = 0;
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail += 1;
};

queueMethods.dequeue = function() {
  var popped = this.storage[this.head];
  this.head += 1;
  return popped;
};

queueMethods.size = function() {
  return this.tail - this.head > 0 ? this.tail - this.head : 0;
};
