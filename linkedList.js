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
  function get(number) {
     let current = head
      if(number === 0){
          return head
      } 
      for (let i = 0; i < number; i++) {
          if(current.next === null){
              return false;
          }
          current = current.next
      }
      return current
  }
  function remove(number) {
      let currentNode = head
      let prevNode;
      if(number === 0){
        return currentNode.next
      }
      for (let i = 0; i <= number; i++) {
        if(i === number){
          prevNode.next = currentNode.next
        }      
        if(currentNode.next === null){
          return false;
        } 
        prevNode = currentNode
        currentNode = currentNode.next
      }
      
  }
  function insert(value, number) {}
  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}