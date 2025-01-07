function creteQuote(quote, callback){
    let myQuote = "Like I always say," +quote;
    callback(myQuote);//
}

function logQuote(quote) {
    console.log(quote + 'YES..');
}
creteQuote("you will getting better!",logQuote);//