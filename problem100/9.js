const word_list = ["apple","banana","cherry","date","elderberry"];

function average_lenght_of_strings(str){
    let totallength = 0;
    let length_num = [];
    
    for(let i = 0; i < str.length; i++){
        totallength += str[i].length;
        length_num.push(str[i].length);
    }
    
    return 'Lengths:'+ [length_num]+'\nAverage Length:'+(totallength/str.length);
}
console.log(average_lenght_of_strings(word_list));