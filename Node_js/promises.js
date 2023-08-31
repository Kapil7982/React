function simulateAsyncAPI(message, delay)
{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(delay < 2000)
            {
                reject("Delay too short");
            }
            else{
                resolve(message);
            }
        }, delay);
    })
}

async function runAsyncTasks(){

    try{
        const result1 = await simulateAsyncAPI("Task 1", 3000);

        console.log(result1);

        const result2 = await simulateAsyncAPI("Task 1", 1000);

        console.log(result2);

    }catch(error)
    {
        console.log("Error", error);
    }
}

runAsyncTasks();