class Nod 
{
    value: number;
    next: Nod;

    constructor (value:number, next:Nod = null)
    {
        this.value = value;
        this.next = next;
    }
}

function findLinkedListMiddle(head: Nod): Nod
{

    if (head == null || head.next == null) return head;
    if (head.next.next == null) return head.next;

    let fast: Nod = head;
    let slow: Nod = head;

    while (fast != null && fast.next != null)
    {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}
function findLinkedListMiddleFirst(head: Nod): Nod
{

    if (head == null || head.next == null) return head;
    if (head.next.next == null) return head.next;

    let fast: Nod = head;
    let slow: Nod = head;

    while (fast.next != null && fast.next.next != null)
    {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

function findLinkedListMiddleMain(): void 
{
    const head: Nod = new Nod(1);
    head.next = new Nod(2)
    head.next.next = new Nod(3)
    head.next.next.next = new Nod(4)
    head.next.next.next.next = new Nod(5)
    head.next.next.next.next.next = new Nod(6)
    
    console.log(`Middle Node: ${findLinkedListMiddle(head).value}`);
    console.log(`Middle Node: ${findLinkedListMiddleFirst(head).value}`)
}

findLinkedListMiddleMain();