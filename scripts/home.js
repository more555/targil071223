// localStorage.setItem("currentUserData", "1")
// localStorage.removeItem("currentUserData")
// localStorage.removeItem("current")
// localStorage.removeItem("photo")
if (!(localStorage.getItem("currentUserData"))) {
    window.location.href = "../pages/login.html"
} else {
    
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "../data/professionals.json", true);
    xhr.onload = function () {
        localStorage.setItem("Experts", this.responseText);
    }

    xhr.send();
    
    // shows the cards of the xperts
    let expertsArr = JSON.parse(localStorage.getItem("Experts"));
    let expertsDiv = document.getElementById("experts")

    expertsArr = expertsArr.proffesionals
    function showExperts(arr) {

       
        for (let x in arr) {
            expertsDiv.innerHTML += `       
<ul id="card${x}" class="card">
<img id="pic${x}">
    <li>first name: <span>${arr[x].fname}</span></li>
    <li>last name: <span>${arr[x].lname}</span></li>
    <li>proffesion: <span>${arr[x].proffesion}</span></li>
    <button id="btn${x}">more info...</button>
</ul>`;
            let btn = document.getElementById(`btn${x}`);
            btn.setAttribute("onclick", `dispExpert(${x})`)
            let temp = "../media/data-analyst.png"

            let img = document.getElementById(`pic${x}`)
            switch (arr[x].proffesion) {
                case "carpenter":
                    img.setAttribute("src", "../media/carpenter.png")
                    img.setAttribute("style", "width:100px;height:100px;")
                    break;
                case "lawyer":
                    img.setAttribute("src", "../media/lawyer.png")
                    img.setAttribute("style", "width:100px;height:100px;")
                    break;
                case "accountant":
                    img.setAttribute("src", "../media/accountant.png")
                    img.setAttribute("style", "width:100px;height:100px;")
                    break;
                case "plumber":
                    img.setAttribute("src", "../media/plumber.png")
                    img.setAttribute("style", "width:100px;height:100px;")
                    break;
                case "painter":
                    img.setAttribute("src", "../media/painter.png")
                    img.setAttribute("style", "width:100px;height:100px;")
                    break;
                case "electrician":
                    img.setAttribute("src", "../media/electrician.png")
                    img.setAttribute("style", "width:100px;height:100px;")
                    break;

                default:
                    img.setAttribute("src", temp)
                    img.setAttribute("style", "width:100px;height:100px;")
                    break;
            }
        }


    }
    showExperts(expertsArr);

    function dispExpert(index) {
        localStorage.removeItem("current")


        localStorage.setItem("current", JSON.stringify(expertsArr[index]));
        window.location.href = "../pages/experts.html";

    }

    //search functions
    let searchArr = [];
    const searchLoc = () => {
        let search = document.getElementById("search1");
        if (search.value == "north") {
            for (let x in expertsArr) {
                if (expertsArr[x].location == "north" || expertsArr[x].location == "israel - all") {
                   searchArr.push(expertsArr[x])
                }
            }
        } else if (search.value == "south") {
            for (let x in expertsArr) {
                if (expertsArr[x].location == "south" || expertsArr[x].location == "israel - all") {
                   searchArr.push(expertsArr[x])
                }
            }
        } else if (search.value == "center") {
            for (let x in expertsArr) {
                if (expertsArr[x].location == "center" || expertsArr[x].location == "israel - all") {
                   searchArr.push(expertsArr[x])
                }
            }
        }
        localStorage.setItem("Experts", searchArr)
        expertsDiv.innerHTML = "";
        showExperts(searchArr)
    }

    const searchName = () => {
      expertsDiv.innerHTML = "";
      let name = document.getElementById("namesearch");
      for(let x in expertsArr){
        if(name.value == expertsArr[x].fname || name.value == expertsArr[x].lname){
            searchArr.push(expertsArr[x]);
        }
      }
     
        showExperts(searchArr)

    }

    const searchRank = () => {
        let rank = document.getElementById("search2");
        switch (rank.value) {
            case "three":
                for(let x in expertsArr){
                    if (expertsArr[x].rank >= 3) {
                        for (let y in searchArr){

                        }
                        searchArr.push(expertsArr[x]);
                    }
                }
                break;
            case "four":
                for(let x in expertsArr){
                    if (expertsArr[x].rank >= 4) {
                        searchArr.push(expertsArr[x]);
                    }
                }
                break;
            case "five":
                for(let x in expertsArr){
                    if (expertsArr[x].rank == 5) {
                        searchArr.push(expertsArr[x]);
                    }
                }
                break;
        
            default:
                break;
        }
        expertsDiv.innerHTML = "";
        showExperts(searchArr) 
    }
    const searchProf = () => {
        let prof = document.getElementById("search3");
        switch (prof.value) {
            case "accountant":
                for(let x in expertsArr){
                    if (expertsArr[x].proffesion == "accountant") {
                        searchArr.push(expertsArr[x]);
                    }
                }  
                
                break;
            case "carpenter":
                for(let x in expertsArr){
                    if (expertsArr[x].proffesion == "carpenter") {
                        searchArr.push(expertsArr[x]);
                    }
                }  
                
                break;
            case "data":
                for(let x in expertsArr){
                    if (expertsArr[x].proffesion == "Data analist") {
                        searchArr.push(expertsArr[x]);
                    }
                }  
                
                break;
            case "electrician":
                for(let x in expertsArr){
                    if (expertsArr[x].proffesion == "electrician") {
                        searchArr.push(expertsArr[x]);
                    }
                }  
                
                break;
            case "lawyer":
                for(let x in expertsArr){
                    if (expertsArr[x].proffesion == "lawyer") {
                        searchArr.push(expertsArr[x]);
                    }
                }  
                
                break;
            case "painter":
                for(let x in expertsArr){
                    if (expertsArr[x].proffesion == "painter") {
                        searchArr.push(expertsArr[x]);
                    }
                }  
                
                break;
            case "plumber":
                for(let x in expertsArr){
                    if (expertsArr[x].proffesion == "plumber") {
                        searchArr.push(expertsArr[x]);
                    }
                }  
                
                break;
        
            default:
                break;
        }
        expertsDiv.innerHTML = "";
        showExperts(searchArr) 
    }


    document.getElementById("btn200").addEventListener("click", searchLoc);
    document.getElementById("btn100").addEventListener("click", searchName);
    document.getElementById("btn300").addEventListener("click", searchRank);
    document.getElementById("btn400").addEventListener("click", searchProf);



























}