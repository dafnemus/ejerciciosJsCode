def largestPermutation(k, arr):
    # Write your code here
    aux = []
    while k > 0 and len(arr) -1:
        posicion_0 = arr[0] 
        num_max = max(arr)
        posicion_num_max = arr.index(num_max)
        if posicion_0 == posicion_num_max:
            k += 1
        if posicion_num_max != posicion_0:
            k -= 1
        arr.remove(num_max)
        arr.insert(posicion_num_max, posicion_0)
        arr.remove(posicion_0)
        aux.append(num_max)
    for i in arr:
        aux.append(i)
    return aux
