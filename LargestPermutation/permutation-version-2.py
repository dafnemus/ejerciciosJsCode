def largestPermutation(k, arr):
    # Write your code here
    aux = []
    while k >= 1 and arr:
        posicion_0 = arr[0] 
        num_max = max(arr)
        posicion_num_max = arr.index(num_max)
        arr.insert(posicion_num_max, posicion_0)
        arr.remove(num_max)
        arr.remove(posicion_0)
        aux.append(num_max)
        k -= 1
    if k == 0:
        for i in arr:
            aux.append(i)
    return aux
