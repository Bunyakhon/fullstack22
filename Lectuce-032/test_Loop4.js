const message = "Hello World";
const lower = message.toLowerCase();
for(let char of lower){
    if("a"||"e"||"i"||"o"||"u" in char){
        console.log(char)
    }
}