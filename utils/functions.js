
export function searchChoice(){

    let choice = document.getElementById("filter");
    if(choice.value == fname.value || choice.value == lname.value){
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
    } else if (choice.value == rank.value){
        let lable = document.createElement("label");
        lable.innerText = "SEARCH FOR EXPERT";
        lable.setAttribute("id", "lable1");
        document.getElementById("searchBar").appendChild(lable);
        let select = document.createElement("select");
        select.setAttribute("id", "ranksel");
        let option0 = document.createElement("option");
        option0.setAttribute("id", "option0");
        option0.innerText = "select rank"
        select.appendChild(option0);
        let option1 = document.createElement("option");
        option1.setAttribute("id", "option1");
        option1.setAttribute("value", "three");
        option1.innerText = "***"
        select.appendChild(option1);
        let option2 = document.createElement("option");
        option2.setAttribute("id", "option2");
        option2.setAttribute("value", "four");
        option2.innerText = "****"
        select.appendChild(option2);
        let option3 = document.createElement("option");
        option3.setAttribute("id", "option3");
        option3.setAttribute("value", "five");
        option3.innerText = "*****"
        select.appendChild(option3);
        document.getElementById("searchBar").appendChild(select);
        let button = document.createElement("button");
        button.innerText = "SEARCH";
        button.setAttribute("id", "btn2");
        document.getElementById("searchBar").appendChild(button);
} else if(choice.value == area.value) {
        let lable = document.createElement("label");
        lable.innerText = "SEARCH FOR EXPERT";
        lable.setAttribute("id", "lable1");
        document.getElementById("searchBar").appendChild(lable);
        let select = document.createElement("select");
        select.setAttribute("id", "ranksel");
        let option4 = document.createElement("option");
        option4.setAttribute("id", "option4");
        option4.innerText = "select location"
        select.appendChild(option4);
        let option5 = document.createElement("option");
        option5.setAttribute("id", "option5");
        option5.innerText = "NORTH"
        select.appendChild(option5);
        let option6 = document.createElement("option");
        option6.setAttribute("id", "option6");
        option6.innerText = "CENTER"
        select.appendChild(option6);
        let option7 = document.createElement("option");
        option7.setAttribute("id", "option7");
        option7.innerText = "SOUTH"
        select.appendChild(option7);
        document.getElementById("searchBar").appendChild(select);
        let button = document.createElement("button");
        button.innerText = "SEARCH";
        button.setAttribute("id", "btn2");
        document.getElementById("searchBar").appendChild(button);

}
}