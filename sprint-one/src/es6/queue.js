class Queue {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    var popped = this.storage[this.head];
    this.head++;
    return popped;
  }

  size() {
    return this.tail - this.head > 0 ? this.tail - this.head : 0;
  }
}
