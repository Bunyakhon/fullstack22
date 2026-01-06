function sum_matrix(matrix1, matrix2){
    let result = [];
    for(let i = 0; i < matrix1.length; i++){
        let row = [];
        for(let j = 0; j< matrix1[0].length; j++){
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }
    console.log(matrix1.length);
    return result;

}
console.log(sum_matrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]],[[4,3,2,1],[8,7,6,5],[12,11,10,9]]));