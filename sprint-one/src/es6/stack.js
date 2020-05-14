class Stack {
  constructor() {
    this.top = 0;
    this.storage = {};
  }

  push(value) {
    this.top++;
    this.storage[this.top] = value;
  }

  pop() {
    let popped = this.storage[this.top];
    this.top -= 1;
    return popped;
  }

  size() {
    return this.top > 0 ? this.top : 0;
  }
}