function stor_student_scores(arr){
    let result = {};
    for(let i = 0; i < arr.length; i++){
        result[arr[i][0]] = {name: arr[i][1], score: arr[i][2]};
    }
    return result;
}

console.log(stor_student_scores([["123456","Alice",85],["654321","Bob",92],["112233","Charlie",78]]))