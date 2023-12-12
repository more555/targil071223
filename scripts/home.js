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
    //NEEDS FIXING redirects to experts.html page 
    
// shows the cards of the xperts
 let expertsArr = JSON.parse(localStorage.getItem("Experts"));
    function showExperts() {
        let expertsDiv = document.getElementById("experts")
       
        expertsArr = expertsArr.proffesionals
        console.log(expertsArr);
        for (let x in expertsArr) {
            expertsDiv.innerHTML += `       
<ul id="card${x}" class="card">
<img id="pic${x}">
    <li>first name: <span>${expertsArr[x].fname}</span></li>
    <li>last name: <span>${expertsArr[x].lname}</span></li>
    <li>proffesion: <span>${expertsArr[x].proffesion}</span></li>
    <button id="btn${x}">more info...</button>
</ul>`;
let btn = document.getElementById(`btn${x}`);
    btn.setAttribute("onclick", `dispExpert(${x})`)

            let img = document.getElementById(`pic${x}`)
            switch (expertsArr[x].proffesion) {
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
                    img.setAttribute("src", "../media/data-analyst.png")
                    img.setAttribute("style", "width:100px;height:100px;")
                    break;
            }
        }
      
        
    }
    showExperts();
    
    function dispExpert(index) {
        localStorage.removeItem("current")

    
        localStorage.setItem("current", JSON.stringify(expertsArr[index]));
        window.location.href = "../pages/experts.html";
       
    }   


    

























}