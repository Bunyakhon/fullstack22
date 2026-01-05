function is_word_in_list(list, word){
 let words = list;
 let search = word;
 for(let i =0; i<words.length; i++){
    if(words[i] === search){
        return true;
    }
 }
 return false;
}
console.log(is_word_in_list(["apple", "banana" ,"cherry"], "banana")); 
console.log(is_word_in_list(["apple", "banana" ,"cherry"], "hello")); 