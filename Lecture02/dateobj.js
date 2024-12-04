//Date funtion return millsecond that have elapsed
//Since midnight on Januaary 1, 1970, UTC
//this example takes 2 second to run
const start = Date.now();

console.log('string timer...');
// expected output: starting timer...
setTimeout(() => {
    const millis = Date.now()- start;
    
        console.log(`seconds elapsed  = ${Math.floor(millis / 1000)}`);
    //expected output: second elapsed = 2  
},2000);