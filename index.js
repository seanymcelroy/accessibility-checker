
const history=new Set();
const search_box=document.getElementById("search_box")
const button=document.getElementById("btn")
button.setAttribute("disabled", true)

search_box.addEventListener("keyup", ()=>{
    const search_box_text=search_box.value;
    if(isValidDomain(search_box_text)){
        button.removeAttribute("disabled");
    }else{
        button.setAttribute("disabled", true);
        
    }
})

button.addEventListener("click", ()=>{
    const search_box_text=search_box.value;
    check_access(search_box_text)
    addSearchHistory(search_box_text);
})

function addSearchHistory(domain){
    
    search_box.value="";
    if (history.has(domain)){
        return
    }
    history.add(domain);

    let listItemNode = document.createElement("LI");
    listItemNode.setAttribute("id", domain);
    
    let textNode = document.createTextNode(domain);
    listItemNode.appendChild(textNode);

    let historyList=document.getElementById("history_list");
    historyList.appendChild(listItemNode);
    button.setAttribute("disabled", true);
}

function isValidDomain(search_box_text){
    if (search_box_text.length===0 || history.has(search_box_text)){
        return false;
    }
    return true;
}

function check_access(domain){
    fetch("http://localhost:8080", {
        method: 'POST',
        body: JSON.stringify({"url": domain})
    })
    .then(response => {
        // indicates whether the response is successful (status code 200-299) or not
        if (!response.ok) {
            throw new Error(`Request failed with status ${reponse.status}`);
        }
        // Turn text response into json
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error))
}
