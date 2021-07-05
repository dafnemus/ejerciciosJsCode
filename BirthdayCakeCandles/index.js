function birthdayCakeCandles(candles) {
    // Write your code here
    let candleTall = 0
    let max = Math.max(...candles)
    for(let i = 0; i < candles.length; i++) {
        if (candles[i] === max) {
            candleTall += 1
        }
    }
    return candleTall
}
