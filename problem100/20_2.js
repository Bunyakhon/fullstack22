function transpose_matrix(matrix){
    let result = [];
    for(let i = 0; i < matrix[0].length; i++){
        let row = [];
        for(let j =0; j <matrix.length; j++){
            row.push(matrix[j][i]);
        }
        result.push(row);
    }
    return result;
}
console.log(transpose_matrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));