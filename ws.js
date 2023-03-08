importPackage(Packages["okhttp3"]); //import package

var client = new OkHttpClient.Builder().retryOnConnectionFailure(true).build();
var request = new Request.Builder().url("ws://192.168.32.101:9317").build();//Change the IP address to the receiver's
client.dispatcher().cancelAll();//clean up once

// WebSocket listener
myListener = {
    onOpen: function (webSocket, response) {
        toastLog("successfully connected to receiver");
    },
    onMessage: function (webSocket, msg) { 
        print("msg");
        print(msg);
    },
    onClosing: function (webSocket, code, response) {
        print("closing");
    },
    onClosed: function (webSocket, code, response) {
        print("closed");
    },
    onFailure: function (webSocket, t, response) {
        print("Error");
        print( t);
    }
}

// Create a WebSocket connection
var webSocket = client.newWebSocket(request, new WebSocketListener(myListener));
 
auto.waitFor();
console.show();
log("Douyin Live Assistant · Normal(ws)")
id("l+x").waitFor()//waiting for new messages
toast("Starting..")
 
id("l+x").findOne().children().forEach(child => {
    var target = child.findOne(id("text"));
    if (target) {
        var last_msg = "initialize";
        while (true) {
            var all_msg = textMatches(/^[*]\s+(.+?)：(.+)$/).find()
            if (all_msg.length > 0) {
                var new_msg = all_msg[all_msg.length - 1].text();
                var msgsplit = new_msg.match(/^[* ]*(.*?)：(.+)$/);
                if (last_msg != new_msg) {
                    var json = {
                        type: "GeneralMessage",
                        data: {
                            NickName: msgsplit[1],
                            Msg: msgsplit[2]
                        }
                    };
                    var hello = JSON.stringify(json);
                    last_msg = new_msg;
                    // log(new_msg.match(/^[*]\s+(.+?)：(.+)$/)[2]);
                    if (webSocket.send(hello)) {
                        print("Sent successfully");
                    } else {
                        print("Failed to send");
                    }
                }
            }
        }
    } else {
        log("No chat messages found")
    }
});

exit();
