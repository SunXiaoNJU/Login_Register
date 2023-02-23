$(function () {
  $(".change a").click(function () {
    $(".signform").animate({ height: "toggle", opacity: "toggle" }, "slow");
  });
});

function registerStart() {
  document.getElementById("registerSignform").style.display = "";
  loginSignclose();
  fixPwdClose();
}
function loginStart() {
  document.getElementById("loginSignform").style.display = "";
  registerSignclose();
  fixPwdClose();
}
function fixPwdStart() {
  document.getElementById("fixPwd").style.display = "";
  registerSignclose();
  loginSignclose();
}
function registerSignclose() {
  document.getElementById("registerSignform").style.display = "none";
}
function loginSignclose() {
  document.getElementById("loginSignform").style.display = "none";
}
function fixPwdClose() {
  document.getElementById("fixPwd").style.display = "none";
}
function loading() {
  document.getElementById("registerloading").style.display = "";
}
