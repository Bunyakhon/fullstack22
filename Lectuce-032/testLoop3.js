const guests = ["Alice","Bob","Charlie","David"];

for (let name of guests){
    if(name === "Charlie"){
        console.log("Found Charlie");
        break
    }
}
