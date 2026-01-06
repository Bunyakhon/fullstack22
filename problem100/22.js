function create_dictionary(list_number,list_word) {
    let result = {};

    for(let i =0; i<list_number.length; i++){
        for(let j = 0; j<list_word.length; j++){
            result[list_number[i]] = list_word[i];
        }
    }
    return result;
}
console.log(create_dictionary([1,2,3,4],["blue","green","pink","yellow"]));