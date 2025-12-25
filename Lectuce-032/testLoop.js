const furniture = ["Table","Chairs","Couch"];

// for(let i = 0; i < furniture.length; i++){
//     for(let j = 0; j < furniture[i].length; j++){
//         console.log(furniture[i][j])
//     }
// }
//Teacher

for (let item of furniture){
    for(let char of item){
        console.log(char);
    }
}