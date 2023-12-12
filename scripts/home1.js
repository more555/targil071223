 let response = [];
 let xhr = new XMLHttpRequest();
xhr.open("get", "../data/professionals.json", true);
xhr.onload = function (){
    response = JSON.parse(this.responseText);
    response = response.proffesionals;
//    console.log(response);

for(let x in response){
   let div = document.getElementById("experts");
   div.innerHTML +=`
   <button id="btn${x}">SELECT</button>
   `
let btn = document.getElementById(`btn${x}`);
btn.setAttribute("oncilck", "newPage()");
}
function newPage(){
    alert("response");
}
}
xhr.send()

