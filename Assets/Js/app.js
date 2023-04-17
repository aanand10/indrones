function Verify() {
  var userRef = "username";
  var passRef = "indrones";

  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if (user == userRef && pass == passRef) {
    window.location.href = "indrones/home.html";
  } else {
    alert("It's seem you make a mistake...Please see below the sign in btn");
  }
}
