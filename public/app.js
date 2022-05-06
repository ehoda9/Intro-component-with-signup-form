const app = document.querySelector(".app");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const btn = document.querySelector(".btn");
app.style.animation = "ShakeApp 1s alternate";
left.style.animation = "fadeUp 1.7s alternate";
right.style.animation = "fadeUp 1.7s alternate";
btn.addEventListener("click", ClaimFree);

function ClaimFree() {
  const first = document.querySelector("#first").value;
  const last = document.querySelector("#last").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  checkFirstLast(first, last);
  checkEmail(email);
  checkPassword(password);
}
function checkFirstLast(first, last) {
  if (first === "") {
    right.style.animation = "Shake 0.2s alternate";
    setTimeout(() => (right.style.animation = ""), 100);
    document.querySelector("#first").style.border = "1px solid red";
    document.querySelector(".error.in1").innerHTML =
      "FirstName can't be empty!!";
    document.querySelector(".holder.in1").classList.add("errors");
  } else {
    if (first.length < 4) {
      right.style.animation = "Shake 0.2s alternate";
      setTimeout(() => (right.style.animation = ""), 100);
      document.querySelector("#first").style.border = "1px solid red";
      document.querySelector(".error.in1").innerHTML = "FirstName is Short.";
      document.querySelector(".holder.in1").classList.add("errors");
    } else {
      document.querySelector("#first").style.border = "1px solid green";
      document.querySelector(".error.in1").innerHTML = "";
      document.querySelector(".holder.in1").classList.remove("errors");
    }
  }

  if (last === "") {
    right.style.animation = "Shake 0.2s alternate";
    setTimeout(() => (right.style.animation = ""), 100);
    document.querySelector("#last").style.border = "1px solid red";
    document.querySelector(".error.in2").innerHTML =
      "FirstName can't be empty!!";
    document.querySelector(".holder.in2").classList.add("errors");
  } else {
    if (last.length < 4) {
      right.style.animation = "Shake 0.2s alternate";
      setTimeout(() => (right.style.animation = ""), 100);
      document.querySelector("#last").style.border = "1px solid red";
      document.querySelector(".error.in2").innerHTML = "FirstName is Short.";
      document.querySelector(".holder.in2").classList.add("errors");
    } else {
      document.querySelector("#last").style.border = "1px solid green";
      document.querySelector(".error.in2").innerHTML = "";
      document.querySelector(".holder.in2").classList.remove("errors");
    }
  }
}
function checkEmail(email) {
  const validateEmail = (email) => {
    let characters =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return characters.test(String(email).toLowerCase());
  };
  if (!validateEmail(email)) {
    right.style.animation = "Shake 0.2s alternate";
    setTimeout(() => (right.style.animation = ""), 100);
    document.querySelector("#email").style.border = "1px solid red";
    document.querySelector(".error.in3").innerHTML =
      "Please Provide valid email !";
    document.querySelector(".holder.in3").classList.add("errors");
  } else {
    document.querySelector("#email").style.border = "1px solid green";
    document.querySelector(".error.in3").innerHTML = "";
    document.querySelector(".holder.in3").classList.remove("errors");
  }
}

function checkPassword(password) {
  if (password === "") {
    right.style.animation = "Shake 0.2s alternate";
    setTimeout(() => (right.style.animation = ""), 100);
    document.querySelector("#password").style.border = "1px solid red";
    document.querySelector(".error.in4").innerHTML =
      "Password can't be empty!!";
    document.querySelector(".holder.in4").classList.add("errors");
  } else {
    if (password.length < 6) {
      right.style.animation = "Shake 0.2s alternate";
      setTimeout(() => (right.style.animation = ""), 100);
      document.querySelector("#password").style.border = "1px solid red";
      document.querySelector(".error.in4").innerHTML = "Password is short !";
      document.querySelector(".holder.in4").classList.add("errors");
    } else {
      document.querySelector("#password").style.border = "1px solid green";
      document.querySelector(".error.in4").innerHTML = "";
      document.querySelector(".holder.in4").classList.remove("errors");
    }
  }
}
