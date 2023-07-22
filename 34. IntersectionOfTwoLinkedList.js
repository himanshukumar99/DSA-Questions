var getIntersectionNode = function(headA, headB) {
    let lenA = getLinkedListLength(headA);
    let lenB = getLinkedListLength(headB);
    let diff = Math.abs(lenA - lenB);
    let pA = headA;
    let pB = headB;
    if(lenA>lenB){
        while(diff>0){
            pA = pA.next;
            diff--;
        }
    } else if(lenA<lenB){
        while(diff>0){
            pB = pB.next;
            diff--;
        }
    }
    while(pA && pB){
        if(pA === pB) return pA;
        pA = pA.next;
        pB = pB.next;
    }
    return null;
 };
 function getLinkedListLength(head){
     let length = 0;
     let current = head;
     while(current){
         length++;
         current = current.next;
     }
     return length;
 }