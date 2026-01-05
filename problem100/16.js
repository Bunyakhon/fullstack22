function insert_at_word(word){
    let words = word
    let result = [];
    for(let i = 0; i<words.length; i++){
        result.unshift(words[i]);
    }
    return result;
}
console.log(insert_at_word(["apple","banana","cherry"]));