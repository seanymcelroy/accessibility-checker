document.getElementById("xyz").addEventListener("click", ()=>{
    httpReq()
})

function httpReq(){
    fetch("http://localhost:8080")
    .then(response => {
        // indicates whether the response is successful (status code 200-299) or not
        if (!response.ok) {
            throw new Error(`Request failed with status ${reponse.status}`)
        }
        // Turn text response into json
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))
}