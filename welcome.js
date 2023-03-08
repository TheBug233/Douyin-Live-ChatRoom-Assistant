auto.waitFor()

console.show();
log("Douyin Live Assistant· welcome")
id("l+x").waitFor()//waiting for new messages
toast("Starting...")
id("l+x").findOne().children().forEach(child => {
    var target = child.findOne(id("text"));
    if (target) {
        var last_msg = "initialize";
        while (true) {
            var all_msg = textStartsWith("*").textEndsWith(" 来了").find()
            if (all_msg.length > 0) {
                var new_msg = all_msg[all_msg.length - 1].text();
                
                if (last_msg != new_msg) {
                    click("说点什么")
                    sleep(100)
                    className("android.widget.EditText").click()
                    className("android.widget.EditText").findOne().setText("Welcome" + new_msg.match(/^[* ]*(.*?) 来了$/)[1] + "to the live ChatRoom！Click follow anchor nya!")
                  // KeyCode(66)
                    sleep(100)        
                    back()           
                    log(new_msg.match(/^[* ]*(.*?) 来了$/)[1] + "has come to the live chatroom");
                    last_msg = new_msg;}
                    else{
                    }
				}
                //sleep(1000);//If the CPU of your Android device cannot handle so much information, you need to set the polling time
                }
            } else {
                log("No chat messages found")
            }
        }
        );

exit();
