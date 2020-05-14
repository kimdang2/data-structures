var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  stack.top = 0;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.top += 1;
  this.storage[this.top] = value;
};

stackMethods.pop = function() {
  var popped = this.storage[this.top];
  this.top -= 1;
  return popped;
};

stackMethods.size = function() {
  return this.top > 0 ? this.top : 0;
};


