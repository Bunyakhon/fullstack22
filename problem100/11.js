function contains_vowel(s){
    const str = s;
    const check = str.toLowerCase();
    let char = [];
    for(let i = 0; i< check.length; i++){
        if(check[i] === 'a' || check[i] === 'e' || check[i] === 'i' || check[i] === 'o' || check[i] === 'u'){
            return true;
    }
    }
    return false;
}

console.log(contains_vowel("Hello World"));
console.log(contains_vowel("Hll Wrld"));