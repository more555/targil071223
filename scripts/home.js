
let xhr = new XMLHttpRequest();
xhr.open("GET", "../data/professionals.json", true);
xhr.onload = function () {
    let expertsDiv = document.getElementById("experts");
    let response = JSON.parse(this.responseText);
    response = response.proffesionals;
    console.log((response));
    for (let x in response){
        expertsDiv.innerHTML +=`
        <img id="" src="">
<ul id="card${x}" class="card">
    <li>first name: <span>${response[x].fname}</span></li>
    <li>last name: <span>${response[x].lname}</span></li>
    <li>proffesion: <span>${response[x].proffesion}</span></li>
    <li><a id="info${x}"href="">more info...</a></li>
</ul>`
    }
}
xhr.send()
const searchChoice = () =>{
    
    let choice = document.getElementById("filter");
    if(choice.value == fname){
        let lable = document.createElement("label");
        lable.innerText = "SEARCH FOR EXPERT";
        lable.setAttribute("id", "lable1");
        document.getElementById("searchBar").appendChild(lable);
        let input = document.createElement("input");
        input.setAttribute("id", "lable1");
        document.getElementById("searchBar").appendChild(input);
        let button = document.createElement("button");
        button.innerText = "SEARCH";
        button.setAttribute("id", "btn2");
        document.getElementById("searchBar").appendChild(button);


    }

}
document.getElementById("btn1").addEventListener("click", searchChoice)