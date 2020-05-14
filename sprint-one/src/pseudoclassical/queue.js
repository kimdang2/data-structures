var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail += 1;
};

Queue.prototype.dequeue = function() {
  var popped = this.storage[this.head];
  this.head += 1;
  return popped;
};

Queue.prototype.size = function() {
  return this.tail - this.head > 0 ? this.tail - this.head : 0;
};
