function mergerLists(headA, headB) {
    let smallvalue;
    if(headA === null && headB === null) {
        return null
    }
    if(headA === null) {
        return headB
    }
    if(headB === null) {
        return headA
    }

    if(headA.data < headB.data) {
        smallvalue = headA
        smallvalue.next = mergerLists(headA.next, headB)
    } else {
        smallvalue = headB
        smallvalue.next = mergerLists(headA, headB.next)
    }
    return smallvalue
}
