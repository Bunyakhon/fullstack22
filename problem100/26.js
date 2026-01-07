function search_countries_by_letter(list,target){
    let result = []
    for(let i =0;i<list.length;i++){
       let contries = list[i][1];
       if(contries[0] === target){
        result.push(contries);
       }
    }
    return result;
}

console.log(search_countries_by_letter([["+1","United States"],["+44","United Kingdon"],["+91","India"]
    ,["+81","๋Japan"],["+49","Germany"],["+86","China"]],"U"));


function search_countries_by_letter2(list, target) {
    return list
        .map(item => item[1])                    // 1. ดึงเอาแค่ชื่อประเทศ (Index 1) ออกมา
        .filter(name => name.startsWith(target)) // 2. กรองเอาเฉพาะชื่อที่ขึ้นต้นด้วย target
        .sort();                                 // 3. เรียงลำดับตัวอักษร
}
console.log(search_countries_by_letter2([["+1","United States"],["+44","United Kingdon"],["+91","India"]
    ,["+81","๋Japan"],["+49","Germany"],["+86","China"]],"U"));