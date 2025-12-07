const start = 1;
const end = 20;
function checkPrime(num){
    if(num <= 1 || !Number.isInteger(num)){
        return "is not prime";
    }else{
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0){
                return "is not prime";
            }
        }
        return "is prime"
    }
}
function primeNumbersInRange(start, end){
    const primes = [];
    let sum = 0;
    for(let num = start; num <= end; num++){
        if(checkPrime(num) === "is prime"){
            primes.push(num)
            sum+= num
        }
    }
    return [primes, sum];
}
console.log(primeNumbersInRange(start, end));