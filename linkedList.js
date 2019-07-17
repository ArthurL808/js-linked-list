/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator() {
  let head = null;
  let tail = null;
  function getHead() {
    return head;
  }
  function getTail() {
    return tail;
  }
  function add(value) {
    let newNode = {
      value: value,
      next: null
    };
    if (head === null) {
      head = newNode;
    }
    if (tail !== null) {
      tail.next = newNode;
    }
    tail = newNode;
    return newNode;
  }
  function get(n) {
    let current = head;
    if (n === 0) {
      return head;
    }
    for (let i = 0; i < n; i++) {
      if (current.next === null) {
        return false;
      }
      current = current.next;
    }
    return current;
  }
  function remove(n) {
    let currentNode = head;
    if (n === 0) {
      head = currentNode.next;
    } else if (get(n) === tail) {
      get(n - 1).next = null;
      tail = get(n - 1);
    } else if (get(n) === false) {
      return false;
    } else {
      get(n - 1).next = get(n + 1);
    }
  }
  function insert(value, n) {
    node = {
      value: value,
      next: null
    };
    if (n === 0) {
      node.next = head;
      head = node;
    } else if (get(n) === false) {
      return false;
    } else {
      node.next = get(n);
      get(n - 1).next = node;
    }
  }
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}
