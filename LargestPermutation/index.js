function largestPermutation(k, arr) {
    // Write your code here
    while(k > 0) {
        let max = Math.max(...arr)
        arr[arr.indexOf(max)] = arr[0]
        arr[0] = max
        k -= 1
    }
    return arr
}
