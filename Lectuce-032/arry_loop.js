const names = ["Jstin", "Sarah", "Christopher"];

for(let i = 0; i <names.lengtj; i++){
    console.log(names[i]);
}

names.forEach(names => {
    console.log(names);
});

names.forEach(myFunction);

function myFunction(name){
    console.log(name);
}

for (let name of names){
    console.log(name);
}