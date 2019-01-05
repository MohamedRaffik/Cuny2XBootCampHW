/*
    Question 4
    JS file is used with part3.html
*/

document.getElementById("submit").addEventListener("click", function() {
    if (document.getElementById("pass").value !== '12345678') { alert("Incorrect Password"); }
    else {
        document.getElementById("login").innerHTML = document.getElementById("user").value + ' is now logged in';
    }
});