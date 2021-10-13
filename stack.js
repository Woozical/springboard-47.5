/** Node: node for a stack. */

class Node {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to top of the stack. Returns undefined. */

  push(val) {
    const next = this.first ? this.first : null;
    const newNode = new Node(val, next);
    this.first = newNode;
    if (!this.last) this.last = this.first;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.size) throw new RangeError('Cannot pop from empty stack');
    const top = this.first;
    this.first = top.next;
    if (!this.first) this.last = null;
    this.size--;
    return top.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {

  }
}

module.exports = Stack;
