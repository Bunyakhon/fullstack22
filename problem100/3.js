let start = 10;
let end = 25;

function FindNonMultiplesOfThreeFourAndFive(start,end){
    result = []
    if(start>end){
        return []
    }else{
        for(let i=start;i<=end;i++){
            if(i%3!==0 && i%4!==0 && i%5!==0){
                result.push(i);
            }
        }
        return result;
    }
}
console.log(FindNonMultiplesOfThreeFourAndFive(start,end));