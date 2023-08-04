/**
 * Node: node for a singly linked list.
 *
 * @format
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let count = 0;
    let currentNode = this.head;

    while (count !== idx) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) return false;

    let count = 0;
    let currentNode = this.head;

    while (count !== idx) {
      currentNode = currentNode.next;
      count++;
    }

    currentNode.val = val;
    return true;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) {
      this.unshift(val);
      return true;
    }
    if (idx === this.length) {
      this.push(val);
      return true;
    }

    const newNode = new Node(val);
    let prevNode = this.head;
    let count = 0;

    while (count < idx - 1) {
      prevNode = prevNode.next;
      count++;
    }

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) return undefined;

    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let prevNode = this.head;
    let currentNode = prevNode.next;
    let count = 1;

    while (count !== idx) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    prevNode.next = currentNode.next;
    this.length--;
    return currentNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let sum = 0;
    let currentNode = this.head;

    while (currentNode) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
