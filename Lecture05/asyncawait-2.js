function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    //logic
    return 42;
}

async function run(){
    //login 
    console.log("Start!!");
    await promiseTimeout(2000);
    //try to take out and see
    const reponse = await longRunningOperation();
    console.log(reponse);

    console.log("Stop!!");
}

run();