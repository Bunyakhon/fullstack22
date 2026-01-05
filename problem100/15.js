function count_words_occurrences(words){
    let word = words;
    let occurrences = {};
    for (let i=0; i<word.length; i++){
        let currentWord = word[i];
        if(occurrences[currentWord] === undefined){
            occurrences[currentWord] = 1;
        }else{
            occurrences[currentWord] += 1;
        }
    }return occurrences;
}


console.log(count_words_occurrences(["apple", "banana" ,"apple", "orange" ,"banana", "apple"]))