function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let contApples = 0
    let contOranges = 0
    for(let i = 0; i < apples.length; i++) {
        apples[i] += a
    }
    for(let i = 0; i < oranges.length; i++) {
        oranges[i] += b
    }
    
    for(let i = 0; i < apples.length; i++) {
        if(apples[i] >= s && apples[i] <= t) {
            contApples += 1
        }
    }
    for(let i=0; i<oranges.length; i++) {
        if(oranges[i]>= s && oranges[i] <= t) {
            contOranges += 1
        }
    }
    console.log(contApples)
    console.log(contOranges)
}
