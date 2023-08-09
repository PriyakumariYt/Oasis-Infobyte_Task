var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
 
  event.preventDefault();
  var username = document.getElementById("username").value;
  // console.log(username);
  var mobile = document.getElementById("mobile").value;
  // console.log(mobile);
  var email = document.getElementById("email").value;
  // console.log(email);
  localStorage.setItem("username", username);
  localStorage.setItem("mobile", mobile);
  localStorage.setItem("email", email);
  document.getElementById("username").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";

  alert("Successfully login!");
});
//       function Back() {
//     window.location.href = "index.html";
// }
