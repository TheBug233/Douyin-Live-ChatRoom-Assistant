auto.waitFor()

var lastMsg = "";
//console.show();
while(true){
    var msg = id("com.ss.android.ugc.aweme:id/m9t").findOne()
    if (msg && msg.desc() != lastMsg) { //If the latest message is found and it is different from the previous message
        format = msg.desc().match(/^粉丝 (.*?)送(.*)$/)
        click("说点什么")
        sleep(100)
        className("android.widget.EditText").click()
        className("android.widget.EditText").findOne().setText("Thank you "+format[1]+" for the "+format[2]+", thanks nya!")
        //KeyCode(66)
        back()
        sleep(100)
        console.log("Thank you "+format[1]+" for the "+format[2]+", thanks nya!"); // output the content of the new message
        lastMsg = msg.desc(); // Update the content of the previous message
    }
    //sleep(1000);//If the CPU of your Android device cannot handle so much information, you need to set the polling time
}
