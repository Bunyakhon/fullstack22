let str = "Hello";

let interator = str[Symbol.iterator]();

while (true){
    let result = interator.next();
    if (result.done) break;
    console.log(result.value);
}