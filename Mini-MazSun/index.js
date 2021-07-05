function miniMaxSum(arr) {
    // Write your code here
    arr.sort()
    let minArr = arr.slice(0,-1)
    let maxArr = arr.slice(1)
    let minSum = 0
    let maxSum = 0
    for(let i= 0; i < minArr.length; i++) {
        minSum += minArr[i]
    }
    for(let i= 0; i < maxArr.length; i++) {
        maxSum += maxArr[i]
    }
    console.log(minSum, maxSum)
}
