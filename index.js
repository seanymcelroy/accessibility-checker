const history=[1,2,3]

document.getElementById("btn").addEventListener("click", ()=>{
    const search_box=document.getElementById("search_box")
    const search_box_text=search_box.value;
    addSearchHistory(search_box_text)
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

function addSearchHistory(domain){
    history.push(domain)

    let listItemNode = document.createElement("LI");
    listItemNode.setAttribute("id", domain);
    
    let textNode = document.createTextNode(domain);
    listItemNode.appendChild(textNode);

    let historyList=document.getElementById("history_list");
    historyList.appendChild(listItemNode);
}