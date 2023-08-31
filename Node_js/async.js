// console.log("Start");

// setTimeout(function(){
//     console.log("Timeout complete");
// },2000);

// console.log("End");

function delayedLog(message, callback)
{
    setTimeout(function(){
        console.log(message);
        callback();
    }, 2000);
}

console.log("Start");

delayedLog("Timeout complete", function(){
    console.log("Callback executed");
});

console.log("End");