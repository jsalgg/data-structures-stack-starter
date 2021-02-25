// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below using a NODE implementation
// (your Stack should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  //LIFO
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(input) {
    const nodeVal = new Node(input);
    if (this.length === 0) {
      this.top = nodeVal;
    } else {
      //link
      nodeVal.next = this.top;
      //reassign top
      this.top = nodeVal;
    }
    this.length++;
    return this.length;
  }
  pop() {
    let savedNode = this.top;
    if (this.length === 0) return null;
    else if (this.length === 1) {
      this.top = null;
    } else if (this.length >= 2) {
      this.top = this.top.next;
    }
    this.length--;
    return savedNode.value;
    //break link
    //reassign
  }
  size() {
    return this.length;
  }
}

const x = new Stack();
//console.log(x.push("A"));
//console.log(x.push("B"));
//console.log(x.pop());

exports.Node = Node;
exports.Stack = Stack;
