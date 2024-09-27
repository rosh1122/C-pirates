

document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "C pirates" && password == "12345") {
       
        window.location.href = "student.html";
    } else {
        alert("Invalid username or password \n Please Try Again");
        document.querySelector("#form").reset();
    }

}


