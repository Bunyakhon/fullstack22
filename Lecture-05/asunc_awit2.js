function promiseTimeout(ms){
    return new Promise((resolve,reject) =>{
        setTimeout(resolve,ms);
    });
}

async function longRunningOperation(){
    return 42;
}

async function run(){
    console.log("Start!!");
    await promiseTimeout(5000);
    const response = await longRunningOperation();
    console.log(response);
    console.log("Stop!!");
}

console.log("Before After run()");
run();
console.log("After Run")