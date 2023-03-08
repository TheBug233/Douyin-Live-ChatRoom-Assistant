auto.waitFor()

//console.show();
log("Douyin Live Assistant· Follow")
id("l+x").waitFor()//waiting for new messages
toast("Starting...")
id("l+x").findOne().children().forEach(child => {
    var target = child.findOne(id("text"));
    if (target) {
        var last_msg = "initialize";
        while (true) {
            var all_msg = textEndsWith(" 关注了主播").find()
            if (all_msg.length > 0) {
                var new_msg = all_msg[all_msg.length - 1].text();
                
                if (last_msg != new_msg) {
                    click("说点什么")
                    sleep(100)
                    className("android.widget.EditText").click()
                    className("android.widget.EditText").findOne().setText("Thanks " + new_msg.match(/^[* ]*(.*?) 关注了主播$/)[1] + " for following nya!")
                    //KeyCode(66)
					back()
                    sleep(100)                
                    log(new_msg.match(/^[* ]*(.*?) 关注了主播$/)[1] + "followed");
                    last_msg = new_msg;}
                    else{
                    }
				}
                //sleep(1000);;//If the CPU of your Android device cannot handle so much information, you need to set the polling time
                }
            } else {
                log("No chat messages found")
            }
        }
        );

exit();
