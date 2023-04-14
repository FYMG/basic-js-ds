const { NotImplementedError } = require('../extensions/index.js');
const {ListNode} = require("../extensions");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this.list
  }

  enqueue(value) {
    if (!this.list){
      return this.list = new ListNode(value)
    }
    if (this.list.next === null) {
      this.list.next = new ListNode(value)
    }
    else {
      this.list = this._addLastItem(this.list,value)
    }
  }

  _addLastItem(list, item) {
    if (list.next === null) {
      list.next = new ListNode(item)
      return list
    }
    else {
      list.next = this._addLastItem(list.next, item)
      return list
    }
  }

  dequeue() {
    const result = this.list.value
    this.list = this.list.next
    return result
  }
}


module.exports = {
  Queue
};
