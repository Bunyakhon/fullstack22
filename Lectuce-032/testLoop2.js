let values1 = ["Apple",1, false];
let values2 = ["Fries",2,true,"Apple",1];
let values3 = ["Mars", 9,"Apple"];
let values4 = []
let found = false;

// for (let i = 0; i < values1.length;i++){
//     for(let j = 0; j < values2.length;j++){
//         for(let k = 0; k<values3.length;k++){
//             if (!found && (values1[i] == values2[j] || values1[i] == values2[k] )){
//                 if(values1[i] === "Apple"){
//                     values4.push(values1[i])
//                     found = true;
//                 }
//             }
//         }
//     }
// }

// console.log(values4)
for(let val1 of values1){
    for(let val2 of values2){
        for(let val3 of values3){
            if(val1 === val2 && val2 === val3){
                console.log(val1)
            }
        }
    }
}