const word_list = ["hello","world","test","case","example"]

function character_frequency(str){
    let word = "";
    const frequency = {};
    for(let i=0; i<str.length; i++){
        word += str[i];
    }
    for(let j=0; j<word.length; j++){
        const char = word[j];
        if(frequency[char]){
            frequency[char] += 1;
        }else{
            frequency[char] = 1;
        }
    }
    return frequency;
}
console.log(character_frequency(word_list));