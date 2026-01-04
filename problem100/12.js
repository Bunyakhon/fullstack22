// function replace_vowels(str){
//     //const replace_vowels = str.toLowerCase();
//     const replace_vowels = str;
//     let result ='';
    
//     for(let i =0; i< replace_vowels.length;i++){
//         if(replace_vowels[i] === 'a'){
//             result +='@';
//         }else if(replace_vowels[i] === 'i'){
//             result +='1';
//         }else if(replace_vowels[i] === 'o'){
//             result +='0';
//         }else{
//             result += replace_vowels[i];
//         }
//     }
//     return result;
// }
// console.log(replace_vowels("Hello World"));
// version 2
function replace_vowels_advanced(str) {
    const map = { a: '@', e: '3', i: '1', o: '0', u: 'u' };
    
    // ตรงส่วน replacement เราส่ง function ไปเช็คว่าตัวที่เจอ (match) คืออะไร
    return str.toLowerCase().replace(/[aeiou]/g, (match) => map[match]);
}

console.log(replace_vowels_advanced("Hello World")); // "h3ll0 w0rld"