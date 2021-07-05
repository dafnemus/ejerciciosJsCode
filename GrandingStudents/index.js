function gradingStudents(grades) {
    // Write your code here
    let finalGrades = []
    for(let i = 0; i < grades.length; i++) {
        if(grades[i] >= 38) {
            if((grades[i] + 1) % 5 === 0){
                grades[i] += 1
                finalGrades.push(grades[i])
            }else if ((grades[i] + 2) % 5 === 0) {
                grades[i] += 2
                finalGrades.push(grades[i])
            } else {
                finalGrades.push(grades[i])
            }
        }
        if(grades[i] < 38) {
            finalGrades.push(grades[i])
        }
    }
    return finalGrades
}
