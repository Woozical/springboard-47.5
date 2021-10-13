/** Node: node for a queue. */

class Node {
  constructor(val, next=null, prev=null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val, null, this.last);
    if (this.last){
      this.last.next = newNode;
    }
    this.last = newNode;
    if (!this.first) this.first = this.last;
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.size) throw new RangeError('Cannot dequeue from empty queue.');

    const node = this.first;
    this.first = node.next;
    if (this.first){
      this.first.prev = null;
    } else {
      this.last = null;
    }
    this.size--;
    return node.val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first ? this.first.val : null;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return !this.size
  }
}

module.exports = Queue;
