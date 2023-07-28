var isPalindrome = function(head) {
    function reverseLinkedList(node){
        let prev = null;
        while(node){
            const nextNode = node.next;
            node.next = prev;
            prev = node;
            node = nextNode;
        }
        return prev;
    }
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let reversedSecondHalf = reverseLinkedList(slow);
    while(reversedSecondHalf){
        if(head.val!== reversedSecondHalf.val){
            return false;
        }
        head = head.next;
        reversedSecondHalf = reversedSecondHalf.next;
    }
    return true;
};