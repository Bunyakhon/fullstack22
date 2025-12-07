const word = "Hello World"
function separate_by_index(str){
    let evenChars = []
    let oddChars = []
    let wordEven = ""
    let wordOdd = ""
    for(let i = 0; i < str.length; i++){
        if(i % 2 === 0){
            evenChars.push(str[i]);
            wordEven += str[i];
        }else{
            oddChars.push(str[i]);
            wordOdd += str[i];
        }
    }
    return 'Even Indexes: ' + wordEven + '\nOdd Indexes: ' + wordOdd;
}
console.log(separate_by_index(word));