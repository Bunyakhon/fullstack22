function processAndCombineString(string,threshold){
    let upperword = [];
    for(let i = 0; i<=string.length-1; i++){
        let charup = string[i].toUpperCase();
        if(charup.length >= threshold){
            upperword.push(charup);
        }
    }
    upperword.sort((a,b) => {
        const getVovel = (str) =>{
            let count = 0;
            const vovel = "AEIOU";
            for(char of str){
                if(vovel.includes(char)){
                    count++
                }
            }
            return count;
        }
        const countA = getVovel(a);
        const countB = getVovel(b);
        if(countB !== countA){
            return countB-countA
        }
        return a.localeCompare(b);
    });
    return upperword.join(" ");

}

const strings = ["apple","banana","cherry","date","fig","grape"];

console.log(processAndCombineString(strings,5));
console.log(processAndCombineString(strings,5));
console.log(processAndCombineString(["hi","hello","world"],2));