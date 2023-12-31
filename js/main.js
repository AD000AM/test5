

function redirectToNewAccount() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("newAccountPage").style.display = "block";
}

function redirectToLoginPage() {
  document.getElementById("newAccountPage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
}


function validateEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function login(email, password) {
  var email = document.getElementById("loginEmailInput").value;
  var password = document.getElementById("loginPasswordInput").value;
  let users = JSON.parse(localStorage.getItem("users"))
  let result = users.find((el) => {
    return el.email2 == email && el.password2 == password
  })

  if (result != -1) {
    var username = email.substring(0, email.indexOf("@"));
    document.getElementById("welcomeMessage").textContent = "Welcome, " + username + "!";
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("welcomePage").style.display = "block";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}





var UserDataArray = []
function redirectToLoginPage() {
  var name = document.getElementById("nameInput").value;
  var email2 = document.getElementById("emailInput").value;
  var password2 = document.getElementById("passwordInput").value;

  var userdata = {
    name: name,
    email2: email2,
    password2: password2,
  };
  UserDataArray.push(userdata)
  localStorage.setItem("users", JSON.stringify(UserDataArray))

  if (name.trim() === "") {
    alert("Please enter your name.");
  } else if (!validateEmail(email2)) {
    alert("Please enter a valid email address.");
  } else if (password2.length < 8) {
    alert("Please enter a password with at least 8 characters.");
  } else {
    alert("Sign up successful!");
    window.location.href = "file:///C:/Users/adam/OneDrive/Desktop/week10/index.html";
  }
}
