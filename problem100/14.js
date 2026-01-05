function collect_unique_words(word){
    let words = word;
    let unique = [];
    for (let i=0; i<words.length; i++){
        let isUnique = false;
        for(let j=0; j<unique.length; j++){
            if(words[i] !== unique[j]){
                isUnique = false;
                break;
            }
    }
    if(!isUnique){
        unique.push(words[i]);
    }
}return unique;
}
console.log(collect_unique_words(["apple", "banana" ,"apple", "cherry" ,"date" ,"banana", "elderverry"]))