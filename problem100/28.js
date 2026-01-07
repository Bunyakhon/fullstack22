function check_member(set,target){
    let myset = new Set(set);
    return myset.has(target);
}
console.log(check_member([1,2,3,"a","e","i","o","u","red","green","blue",],2));
console.log(check_member([1,2,3,"a","e","i","o","u","red","green","blue",],"a"));
console.log(check_member([1,2,3,"a","e","i","o","u","red","green","blue",],"yellow"));