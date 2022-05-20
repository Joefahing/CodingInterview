const { cycle } = require("collections/iterator");

class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
}

// Time complexity is O(2n) -> O(n) from iterating through linked list to find cycle and length
// Space complexity is O(1)

const cycleLength = function (head) 
{
    let fast = head;
    let slow = head;
    let length = 0;

    while (fast != slow || fast == head)
    {
        slow = slow.next;
        fast = fast.next.next;
    }

    let current = slow;

    do {
        current = current.next;
        length += 1;
    } while (current != slow)

    return length;
}

let input = new Node(1);
input.next = new Node (2);
input.next.next = new Node(3);
input.next.next.next = new Node(4);
input.next.next.next.next = new Node(5);
input.next.next.next.next.next = new Node(6);
input.next.next.next.next.next.next = input.next.next.next;

console.log(`Length of cycle is ${cycleLength(input)}`);

