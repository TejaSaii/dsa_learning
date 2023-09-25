/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let h1 = head;
    let e1 = getMiddle(head);
    //to break the list into two halves and reverse the 2nd half
    //we are considering the 2nd half as smaller to avoid a edge case for our below code
    //the list is divided into two halves
    let h2 = e1.next;
    e1.next = null;
    h2 = reverseList(h2);

    let t1 = h1;
    let t2 = h2;
    while(t1 && t2) {
        t1 = t1.next;
        t2 = t2.next;
        h1.next = h2;
        h2.next = t1;
        h1 = t1;
        h2 = t2;
    }
};

//to reverse the 2nd half
var reverseList = (h) => {
    let [a, b] = [null, h];
    while (b) {
        let c = b.next;
        b.next = a;
        a = b;
        b = c;
    }
    return a;
}

//To get the middle element of the list
var getMiddle = (h) => {
    let s = h;
    let f = h.next;
    while (f !== null && f.next !== null) {
        s = s.next;
        f = f.next.next;
    }
    return s;
}