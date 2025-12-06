const start = 1;
const end = 100;

function findMultiplesOfThree(start, end){
    if(start > end){
        return [];
    }else{
        let result = [];
        for(let i=start; i<=end; i++){
            if(i%3 === 0){
                result.push(i);
            }
        }
        return result;
    }
}
function printMultiplesOfThree(result){
    for(let i = 0; i <= result.length-1; i++){
        console.log(result[i]);
    }
}
//printMultiplesOfThree(findMultiplesOfThree(start, end));
// console.log(findMultiplesOfThree(start, end));
console.log(printMultiplesOfThree(findMultiplesOfThree(start,end)));