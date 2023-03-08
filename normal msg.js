auto.waitFor()

console.show();
log("Douyin Live Assistant · Normal")
id("l+x").waitFor()//waiting for new messages
toast("starting...")
id("l+x").findOne().children().forEach(child => {
    var target = child.findOne(id("text"));
    if (target) {
        var last_msg = "initialize";
        while (true) {
            var all_msg = textMatches(/^[*]\s+(.+?)：(.+)$/).find()
            if (all_msg.length > 0) {
                var new_msg = all_msg[all_msg.length - 1].text();
                
                if (last_msg != new_msg) {
                    log(new_msg.match(/^[*]\s+(.+?)：(.+)$/)[1] + " says " + new_msg.match(/^[*]\s+(.+?)：(.+)$/)[2]);
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
