function set_operations(set1,set2){
    let myset1 = new Set(set1);
    let myset2 = new Set(set2);
    let union = new Set(myset1,myset2);
    let inter = myset1.intersection(myset2);
   

    return  [[union],inter];
}
console.log(set_operations(["a","e","i","o","u"],["h","e","i","i","u"]))
