// 随机生成长度为n的字符串
function randomString(n) {
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  for (var i = 0; i < n; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// 生成随机用户名
function generateUsername() {
  var firstName = "* "+randomString(3);
  var lastName = randomString(2)+" 来了";
  var username = firstName + lastName;
  return username;
}

// 生成1000个随机用户名
var usernames = [];
for (var i = 0; i < 1000; i++) {
  usernames.push(generateUsername());
}

while (true) {
  sleep(500)
          var new_msg = usernames[random(0,1000)]
            click("说点什么")
            sleep(100)
            className("android.widget.EditText").click()
            className("android.widget.EditText").findOne().setText("欢迎" + new_msg.match(/^[* ]*(.*?) 来了$/)[1] + "来到直播间！点下关注支持主播喵~")
            sleep(500)
            click(943.4,1181.5)
            sleep(100)                   
            log(new_msg.match(/^[* ]*(.*?) 来了$/)[1] + "已来到直播间");}

        //sleep(1000);//CPU不行就限制轮询间隔
        