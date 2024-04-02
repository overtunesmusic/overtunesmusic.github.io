function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";SameSite=None" + ";Secure";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

let user = getCookie("cookies");
if (user != "") {
    // console.log("Welcome again " + user);
    document.getElementById("main-cookies").style.display = "none";
    if (document.getElementById("btn-del-cookies")) {
        document.getElementById("btn-del-cookies").style.display = "block";
    }
} else {
    document.getElementById("main-cookies").style.display = "flex";
    if (document.getElementById("btn-del-cookies")) {
        document.getElementById("btn-del-cookies").style.display = "none";
    }
}

document.getElementById("btn-cookies").onclick = function () {
    user = "true";
    setCookie("cookies", user, 365);
    document.cookie="thirdparty=yes";
    document.getElementById("main-cookies").style.display = "none";
    if (document.getElementById("btn-del-cookies")) {
        document.getElementById("btn-del-cookies").style.display = "block";
    }
    window.location.href = "";
};

function eraseCookie(cname) {   
    document.cookie = cname + "=; Max-Age=0";
    document.cookie="thirdparty=; Max-Age=0";
}

if (document.getElementById("btn-del-cookies")) {
    document.getElementById("btn-del-cookies").onclick = function () {
        eraseCookie("cookies");
        document.getElementById("main-cookies").style.display = "flex";
        window.location.href = "";
    };
}

const amd = new Date();
let amyear = amd.getFullYear();
document.getElementById("myear").innerHTML = amyear;
