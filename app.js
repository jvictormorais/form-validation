const nameInput = document.getElementById("name");
const zipInput = document.getElementById("zipcode");
const passwordInput = document.getElementById("password");
const confpasswordInput = document.getElementById("confpassword");
const nameError = document.getElementById("name-error");
const zipError = document.getElementById("zip-error");
const passwordError = document.getElementById("password-error");
const confpasswordError = document.getElementById("confpassword-error");
const submitBtn = document.getElementById("submit");
const regexZip = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/;

nameInput.addEventListener("input", function (e) {
  if (nameInput.value.length < 6) {
    nameError.innerText = "name must have 6 or more characters";
    nameInput.className = "error";
  } else {
    nameError.innerText = "";
    nameInput.className = "valid";
  }
});

zipInput.addEventListener("input", function (e) {
  if (!regexZip.test(zipInput.value)) {
    zipError.innerText = "this zip code is not valid";
    zipInput.className = "error";
  } else {
    zipError.innerText = "";
    zipInput.className = "valid";
  }
});

passwordInput.addEventListener("input", function (e) {
  if (passwordInput.value.length < 6) {
    passwordError.innerText = "name must have 6 or more characters";
    passwordInput.className = "error";
  } else {
    passwordError.innerText = "";
    passwordInput.className = "valid";
  }
});

confpasswordInput.addEventListener("input", function (e) {
  console.log(passwordInput.value);
  if (confpasswordInput.value !== passwordInput.value) {
    confpasswordError.innerText = "Password does not match";
    confpasswordInput.className = "error";
  } else {
    confpasswordError.innerText = "";
    confpasswordInput.className = "valid";
  }
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(nameError.value, nameInput.value);
  if (
    nameError.value === undefined &&
    zipError.value === undefined &&
    passwordError.value === undefined &&
    confpasswordError.value === undefined &&
    nameInput.value !== "" &&
    zipInput.value !== "" &&
    passwordInput.value !== "" &&
    confpasswordInput.value !== ""
  ) {
    alert("Sucess");
  } else {
    alert("review your form");
  }
});
