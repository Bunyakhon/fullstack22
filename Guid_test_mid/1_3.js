function processAndCombineString(strings, lengthThreshold){
    let word = []
    for(let i = 0; i<= strings.length-1;i++){
        if(strings[i].length>=lengthThreshold){
            word.push(strings[i].toUpperCase());
        }
    }
    word.sort((a,b) =>{
        const getvovel = (str) =>{
            let count = 0;
            const vovel = "AEIOU";
            for(char of str){
                if(vovel.includes(char)){
                    count++;
                }
            }
            return count;
        }
        const coutA = getvovel(a);
        const countB = getvovel(b);
        if(countB !== coutA){
            return countB - coutA
        }
        return a.localeCompare(b);
    })
    return word.join(" ")
}
const strings = ["apple","banana","cherry","date","fig","grape"];
console.log(processAndCombineString(strings,5));
console.log(processAndCombineString(strings,5));
console.log(processAndCombineString(["hi","hello","world"],2));