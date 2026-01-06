function stor_student(arr){
    let result = {};
    for(let i = 0; i < arr.length; i++){
        result[arr[i][0]] = arr[i][1];
    }
    return result;
}

console.log(stor_student([["123456","Alice"],["654321","Bob"],["112233","Charlie"]]))