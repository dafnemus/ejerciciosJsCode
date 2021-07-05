function timeConversion(s) {
    // Write your code here
    let timeArr = s.slice(0, -2).split(":");
    if (s.slice(-2) === 'AM' && timeArr[0] == '12'){
        timeArr[0] = '00'
    } else if(s.slice(-2) === 'PM'){
        timeArr[0] = (timeArr[0] % 12) + 12
    }
    return timeArr.join(":")
}
