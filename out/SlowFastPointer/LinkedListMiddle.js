var Nod = /** @class */ (function () {
    function Nod(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
    }
    return Nod;
}());
function findLinkedListMiddle(head) {
    if (head == null || head.next == null)
        return head;
    if (head.next.next == null)
        return head.next;
    var fast = head;
    var slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
function findLinkedListMiddleFirst(head) {
    if (head == null || head.next == null)
        return head;
    if (head.next.next == null)
        return head.next;
    var fast = head;
    var slow = head;
    while (fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}
function findLinkedListMiddleMain() {
    var head = new Nod(1);
    head.next = new Nod(2);
    head.next.next = new Nod(3);
    head.next.next.next = new Nod(4);
    head.next.next.next.next = new Nod(5);
    head.next.next.next.next.next = new Nod(6);
    console.log("Middle Node: " + findLinkedListMiddle(head).value);
    console.log("Middle Node: " + findLinkedListMiddleFirst(head).value);
}
findLinkedListMiddleMain();
