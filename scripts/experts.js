


let current = JSON.parse(localStorage.getItem("current"));
const showCurrent =() => {


console.log(current);
let keyNmae = document.getElementById("keyNmae");
keyNmae.innerText = "Name:  ";
let NmaeValue = document.getElementById("NmaeValue");
NmaeValue.innerText = current.fname+" "+current.lname ;
let keyproff = document.getElementById("keyproff");
keyproff.innerText = "Proffesion:  "
let proffValue = document.getElementById("proffValue");
proffValue.innerText = current.proffesion;
let keylocation = document.getElementById("keylocation");
keylocation.innerText = "Location:  ";
let locationValue = document.getElementById("locationValue");
locationValue.innerText = current.location;
let keyspecs = document.getElementById("keyspecs");
keyspecs.innerText = "specialties:  ";
let specsValue = document.getElementById("specsValue");
specsValue.innerText = current.specialties;
let keyexperiance = document.getElementById("keyexperiance");
keyexperiance.innerText = "experiance:  "
let experianceValue = document.getElementById("experianceValue");
experianceValue.innerText = current.experience
let keybusiness = document.getElementById("keybusiness");
keybusiness.innerText = "Business Name:  ";
let businessValue = document.getElementById("businessValue");
businessValue.innerText = current.buisness;
let keyprice = document.getElementById("keyprice");
keyprice.innerText = "Price Range:  ";
let priceValue = document.getElementById("priceValue");
priceValue.innerText = current.price;

setTimeout(() => {
  window.location.href = current.href
}, 10000)
}

showCurrent();
let h1 = document.getElementById("koteret");
h1.innerText = "WELLCOME TO "+ current.fname+" "+current.lname+ "`s PAGE";
function showPic() {
let pic = document.getElementById("pic")
pic.setAttribute("src", current.photo)

}
showPic()