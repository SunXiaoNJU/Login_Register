var password = document.getElementById("password"); //获取文本框的对象
var pwdfix = document.getElementById("pwdfix"); //获取文本框的对象

//获取所有的span标签 返回值是一个数组
var spanDoms = document.getElementsByTagName("span");
// 注册部分的密码强度验证
password.onkeyup = function () {
  //获取用户输入的密码,然后判断其强度 返回0 或者 1 2 3 4
  let index = checkPassWord(this.value);
  for (var i = 0; i < spanDoms.length; i++) {
    spanDoms[i].className = ""; //清空span标签所有的class样式
    if (index) {
      //1 ~ 4
      spanDoms[index - 1].className = "s" + index;
    }
  }
};
// 忘记密码部分的密码强度验证
pwdfix.onkeyup = function () {
  //获取用户输入的密码,然后判断其强度 返回0 或者 1 2 3 4
  let index = checkPassWord(this.value);
  for (var i = 0; i < spanDoms.length; i++) {
    spanDoms[i].className = ""; //清空span标签所有的class样式
    if (index) {
      //5 ~ 8
      spanDoms[index + 3].className = "s" + index;
    }
  }
};
//校验密码强度
function checkPassWord(value) {
  // 0： 表示第一个级别 1：表示第二个级别 2：表示第三个级别
  // 3： 表示第四个级别 4：表示第五个级别
  var modes = 0;
  if (value.length < 6) {
    //最初级别
    return modes;
  }
  if (/\d/.test(value)) {
    //如果用户输入的密码 包含了数字
    modes++;
  }
  if (/[a-z]/.test(value)) {
    //如果用户输入的密码 包含了小写的a到z
    modes++;
  }
  if (/[A-Z]/.test(value)) {
    //如果用户输入的密码 包含了大写的A到Z
    modes++;
  }
  if (/\W/.test(value)) {
    //如果是非数字 字母 下划线
    modes++;
  }
  switch (modes) {
    case 1:
      return 1;
      break;
    case 2:
      return 2;
      break;
    case 3:
      return 3;
      break;
    case 4:
      return 4;
      break;
  }
}
