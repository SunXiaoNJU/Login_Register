// email check
function doGetEmailCode() {
  let email = $("#email").val(); //获取接收验证码的邮箱
  let emailUrl = "getEmailCode?toEmail=" + email; //地址与邮箱拼接
  $.ajax({
    url: emailUrl,
    success: function (result) {
      console.log("result", result);
    },
  });
}

function doCompareEmailCode() {
  let codeid = $("#identification").val();
  let emailUrl = "checkEmailCode?code=" + codeid;
  $.ajax({
    url: emailUrl,
    success: function (result) {
      console.log("result", result);
    },
  });
  alert("Success");
}

function fixGetEmailCode() {
  var email = $("#emailfix").val(); //获取接收验证码的邮箱
  let emailUrl = "getEmailCode?toEmail=" + email; //地址与邮箱拼接
  $.ajax({
    url: emailUrl,
    success: function (result) {
      console.log("result", result);
    },
  });
}

function fixCompareEmailCode() {
  var codeid = $("#identificationfix").val();
  var url = "checkEmailCode?code=" + codeid;
  let emailUrl = "checkEmailCode?code=" + codeid;
  $.ajax({
    url: emailUrl,
    success: function (result) {
      console.log("result", result);
    },
  });
  alert("Success");
}
