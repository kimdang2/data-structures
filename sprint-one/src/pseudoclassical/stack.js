var Stack = function() {
  this.top = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.top += 1;
  this.storage[this.top] = value;
};

Stack.prototype.pop = function() {
  var popped = this.storage[this.top];
  this.top -= 1;
  return popped;
};

Stack.prototype.size = function () {
  return this.top > 0 ? this.top : 0;
};