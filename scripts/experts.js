let current = JSON.parse(localStorage.getItem("current"));
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

let h1 = document.getElementById("koteret");
h1.innerText = "WELLCOME TO "+ current.fname+" "+current.lname+ "`s PAGE";
function showPic() {
document.getElementById("pic").src = current.photo
// switch (current.id) {
//     case "1":
//         document.getElementById("pic").src ="../media/geizenkot.jpeg";  
//         break;
//     case 2:
//         document.getElementById("pic").src ="../media/bgantz.jpeg";  
//         break;
//     case 3:
//         document.getElementById("pic").src ="../media/dhalutz.jpeg";  
//         break;
//     case 4:
//         document.getElementById("pic").src ="../media/ebarak.jpeg";  
//         break;
//     case 5:
//         document.getElementById("pic").src ="../media/dshomron.jpeg";  
//         break;
//     case 6:
//         document.getElementById("pic").src ="../media/reitan.jpeg";  
//         break;
//     case 7:
//         document.getElementById("pic").src ="../media/smofaz.jpeg";  
//         break;
//     case 8:
//         document.getElementById("pic").src ="../media/alifkin.jpeg";  
//         break;
//     case 9:
//         document.getElementById("pic").src ="../media/ydory.jpeg";  
//         break;
//     case 10:
//         document.getElementById("pic").src ="../media/mlevi.jpeg";  
//         break;
//     case 11:
//         document.getElementById("pic").src ="../media/myeelon.jpeg";  
//         break;
//     case 12:
//         document.getElementById("pic").src ="../media/geizenkot.jpeg";  
//         break;
//     case 13:
//         document.getElementById("pic").src ="../media/delazar.jpeg";  
//         break;
//     case 14:
//         document.getElementById("pic").src ="../media/hBar-Lev.jpeg";  
//         break;
//     case 15:
//         document.getElementById("pic").src ="../media/mgur.jpeg";  
//         break;
//     case 16:
//         document.getElementById("pic").src ="../media/ttzur.jpeg";  
//         break;
//     case 17:
//         document.getElementById("pic").src ="../media/hlaskov.jpeg";  
//         break;
//     case 18:
//         document.getElementById("pic").src ="../media/mdayan.jpeg";  
//         break;
//     case 19:
//         document.getElementById("pic").src ="../media/acochavi.jpeg";  
//         break;
//     case 20:
//         document.getElementById("pic").src ="../media/mmaklef.jpeg";  
//         break;
//     case 21:
//         document.getElementById("pic").src ="../media/iyadin.jpeg";  
//         break;

//     default:document.getElementById("pic").alt ="picture unavailable"
//         break;
// }
}
showPic()