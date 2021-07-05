def removeDuplicates(head):
    # Write your code here
    if head:
        nodo = head
        while nodo.next:
            if nodo.data == nodo.next.data:
                nodo.next = nodo.next.next
            else:
                nodo = nodo.next
    return head
