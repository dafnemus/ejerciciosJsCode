function plusMinus(arr) {
    // Write your code here
    let listZer = []
    let listMin = []
    let listMax = []
    let resultado;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            listZer.push(arr[i])
        };
        if (arr[i] < 0) {
            listMin.push(arr[i])
        } else if(arr[i]> 0){
            listMax.push(arr[i])
        }
    }
    let neg = listMin.length / arr.length
    let pos = listMax.length / arr.length
    let zero = listZer.length / arr.length
    console.log(pos)
    console.log(neg)
    console.log(zero)
}
