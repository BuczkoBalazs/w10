const showMessageLater = (msg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg === "Hello") {
                return reject("Something went wrong!")
            }
            return resolve(msg)
        }, 2000)
    })
};
showMessageLater("Hello2").then((result)=>{
    console.log(result)
    showMessageLater("Hello3").then((result)=>{
        console.log(result)
        showMessageLater("Hello4").then((result)=>{
            console.log(result)
        })
    })
}).catch((err)=> {
    console.log(err)
})