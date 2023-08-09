var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
var email = document.getElementById("email").value;
    // console.log(email);
     var userPassword = document.getElementById("userPassword").value;
    //  console.log(userPassword);

    localStorage.setItem("email", email);
      localStorage.setItem("userPassword", userPassword);
           alert("Successfully registered!");
       window.location.href = "login.html";
});
