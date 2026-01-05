function remove_word_form_list(list, word){
 let words = list;
 let remove = word;
 let result = [];
 for(char of words){
    if(char !== remove){
        result.push(char);
    }
 }return result;
}
console.log(remove_word_form_list(["apple", "banana" ,"cherry", "date"], "banana"));