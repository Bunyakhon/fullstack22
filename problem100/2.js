const start = 1;
const end = 100;

function findMultiplesOfThreeAndFour(start,end){
    const result = [];
    if(start > end){
        return [];
    }else{
        for(let i=start; i<=end; i++){
            if(i%3 === 0 && i%4 === 0){
                result.push(i);
            }
        }
        return result;
    }
}
console.log(findMultiplesOfThreeAndFour(start,end));