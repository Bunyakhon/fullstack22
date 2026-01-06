function create_dictionary(keys, value){
    let result = {};
    for(let i = 0; i < keys.length; i++){
        for(let j =0; j <value.length; j++){
            result[keys[i]] = value[i];
        }
    }return result;
}


console.log(create_dictionary([1,2,3,4],["ant","cat","dog","elephant"]));