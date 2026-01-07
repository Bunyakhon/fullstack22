function calculate_set_differences(set1,set2){
    let myset = new Set(set1);
    let myset2 = new Set(set2);
    let difernences = myset.difference(myset2);
    let difernences2 = myset2.difference(myset);
    return [[difernences],difernences2];
}
console.log(calculate_set_differences(["a","b","c"],["b","c","d"]));