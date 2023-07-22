class ListNode{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
} 
var removeElements = function(head, val) {
    const dummy = new ListNode(-1);
    dummy.next = head;
    let current = head;
    let prev = dummy;
    while(current != null){
        if(current.val === val){
            prev.next = current.next;
        }else{
            prev = current;
        }
        current = current.next;
    }
    return dummy.next;
};