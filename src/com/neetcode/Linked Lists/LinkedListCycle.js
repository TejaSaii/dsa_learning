/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    let s = head;
    let f = head.next;
    while(f && f.next){
        if(s == f){
            return true;
        }
        s = s.next;
        f = f.next.next;
    }
    return false;
};