function sum_target(num_list, target) {
    let result = [];
    for (let i = 0; i< num_list.length; i++){
        for(let j = i+1; j < num_list.length; j++){
            if(num_list[i] + num_list[j] === target){
                result.push([num_list[i], num_list[j]]);
            }
        }
    }
    return result;
}
function subtrack_target(num_list, target) {
    let result = [];
    for (let i = 0; i< num_list.length; i++){
        for(let j = i+1; j < num_list.length; j++){
            if(num_list[j] - num_list[i] === target){
                result.push([num_list[i], num_list[j]]);
            }
        }
    }
    return result;
}
console.log(sum_target([1,2,3,4,5,6,7,8,9],15))
console.log(subtrack_target([1,2,3,4,5,6,7,8,9],5))
console.log(subtrack_target([1,2,3,4,5,6,7,8,9],7))