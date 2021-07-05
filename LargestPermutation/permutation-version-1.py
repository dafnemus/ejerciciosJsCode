def largestPermutation(k, arr):
    posicion_0 = arr[0]
    num_max = max(arr)
    posicion_num_max = arr.index(num_max)
    arr.insert(posicion_num_max, posicion_0)
    arr.remove(num_max)
    arr.remove(posicion_0)
    arr.insert(0, num_max)
    return arr
