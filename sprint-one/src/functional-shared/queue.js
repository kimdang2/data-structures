var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.tail = 0;
  queue.head = 0;
  queue.storage = {};
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.tail] = value;
  this.tail += 1;
};

queueMethods.dequeue = function () {
  var popped = this.storage[this.head];
  this.head += 1;
  return popped;
};

queueMethods.size = function () {
  return this.tail - this.head > 0 ? this.tail - this.head : 0;
};
