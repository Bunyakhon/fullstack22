// function processAndCombineString(strings, lengthThreshold){
//     let UpperWord = []

//     for(let i = 0; i<=strings.length-1;i++){
//         const word = strings[i].toUpperCase();
//         if (word.length >= lengthThreshold){
//             UpperWord.push(word);
//         }
//     }
//     let cheackVovel = {}
//     for(let k = 0; k<=UpperWord.length-1;k++){
//         let count = 0;
//         for(let l = 0; l<= UpperWord[k].length; l++){
//             let char = UpperWord[k][l];
//             if(char === "A" || char === "E" ||char=== "I" ||char === "O" ||char === "U"){
//                 count = l++;
//             }
//         }
//         cheackVovel[UpperWord[k]] = count;
//     }
//     for (let i = 0; i<= cheackVovel.length-1; i++){

//     }
//     return cheackVovel;
// }
function processAndCombineString(strings, lengthThreshold) {
    let UpperWord = [];

    for (let i = 0; i < strings.length; i++) {
        const word = strings[i].toUpperCase();
        if (word.length >= lengthThreshold) {
            UpperWord.push(word);
        }
    }

    // 2. ใช้ .sort() แทน Bubble Sort ที่เราคุยกันก่อนหน้า
    UpperWord.sort((a, b) => {
        // สร้างฟังก์ชันนับสระแบบเร็วๆ
        const getVowelCount = (str) => {
            let count = 0;
            const vowels = "AEIOU";
            for (let char of str) {
                if (vowels.includes(char)) count++;
            }
            return count;
        };

        const countA = getVowelCount(a);
        const countB = getVowelCount(b);

        // --- Logic การเปรียบเทียบ ---
        if (countA !== countB) {
            return countB - countA; // ถ้าสระไม่เท่า เอาสระมาก (B) ขึ้นก่อน
        }
        return a.localeCompare(b); // ถ้าสระเท่า เรียงตัวอักษร A-Z
    });
    return UpperWord.join(" ");
}
const strings = ["apple","banana","cherry","date","fig","grape"];



console.log(processAndCombineString(strings,5));
console.log(processAndCombineString(strings,5));
console.log(processAndCombineString(["hi","hello","world"],2));