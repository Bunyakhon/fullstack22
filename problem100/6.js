const num = 17;

function checkPrime(num){
    if(num <= 1 || !Number.isInteger(num)){
        return "is not prime";
    }else{
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return "is not prime";
            }
        }
        return "is prime"
    }
}
console.log(checkPrime(num));

// const num = 18;

// function checkPrime(num){
//     if(num <= 1 || !Number.isInteger(num)){
//         return "is not prime";
//     }else{
//         for(let i = 2; i <= Math.sqrt(num); i++){
//             if(num % i === 0){
//                 return "is not prime";
//             }
//         }
//         return "is prime"
//     }
// }
// console.log(checkPrime(num));