def mergeLists(headA, headB):
    if headA is None and headB is None:
        return None
    if headA is None:
        return headB
    if headB is None:
        return headA
    if headA.data < headB.data:
        value_aux = headA
        value_aux.next = mergeLists(headA.next, headB)
    else:
        value_aux = headB
        value_aux.next = mergeLists(headA, headB.next)
    return value_aux
