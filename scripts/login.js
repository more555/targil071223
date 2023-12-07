var _a;
let userList = [];
let errMsg = document.getElementById("showError");
errMsg.style.display = 'none';
initUsers();
function initUsers() {
    let response = localStorage.getItem("userData");
    if (response != null) {
        let res = JSON.parse(response);
        userList.push(...res);
    }
    console.log(userList);
}
function login_handler() {
    //window.location.href = "../pages/homePage.html";
    let userName = document.getElementById("userName");
    let password = document.getElementById("password");
    if (userName.value == "" || password.value == "") {
        //alert("Missing Data!");
        errMsg.innerHTML = 'Missing Data';
        errMsg.style.display = 'block';
    }
    else {
        //let user = new User(userName.value , password.value);
        console.log(userName.value);
        console.log(password.value);
        errMsg.style.display = 'none';
        var currentUser;
        for (let x in userList) {
            console.log(userList[x]);
            //בודק התאמה של שם משתמש וסיסמה שהוקלדו ע"י המשתמש, מול המערך שייצרתי
            // נמצאה התאמה
            if (userList[x].userName == userName.value && userList[x].password == password.value) {
                // שומר את הנתונים של המשתמש הנוכחי שנכנס למערכת
                currentUser = userList[x];
                // console.log('user is valid');              
                // console.log(userList[x]);              
                break;
            }
        }
        //console.log("Test current User");
        // בודק אם המשתמש הנוכחי נמצא והוגדר
        if (currentUser != undefined) {
            console.log(currentUser);
            //שומר את נתוני המשתמש בלוקל סטורג' לטובת שימוש במערכת 
            localStorage.setItem("currentUserData", JSON.stringify(currentUser));                
            setTimeout(function () {
                window.location.href = "../pages/home.html";
            }, 3000);
        }
        else {
            //המשתמש הנוכחי לא הוגדר כיוון שלא נמצאה התאמה מול מערך המשתמשים
            errMsg.style.display = 'block';
            errMsg.innerHTML = 'User not exist';           
        }
    }
}
(_a = document.getElementById("logIn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", login_handler);

