function removeDuplicates(list) {
    if(list){
        let nodo = list
        while(nodo.next) {
            if (nodo.data === nodo.next.data) {
                nodo.next = nodo.next.next
            } else {
                nodo = nodo.next
            }
        }
    }
    return list
 }
