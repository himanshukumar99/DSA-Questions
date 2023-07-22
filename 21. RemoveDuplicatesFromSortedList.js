class listNode{
    constructor(val,next = null){
        this.val = null;
        this.next = next;
    }
}
var deleteDuplicates = function(head) {
  let current = head;
  while (current) {
    if (current.next && current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;

};