const number = 20;
function find_dvisors(number){
    const divisors = [];
    if(number <= 0 || !Number.isInteger(number)){
        return [];
    }else{
        for(let i =1; i <= number; i++){
            if(number % i === 0){
                divisors.push(i);
            }
        }return divisors;
    }
}
console.log(find_dvisors(number));