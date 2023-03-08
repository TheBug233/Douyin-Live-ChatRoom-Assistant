# Douyin-Live-ChatRoom-Assistant
Real-time acquisition script in Douyin Live ChatRoom based on AutoX.js  
Please note that this script does not apply to [TikTok](https://www.tiktok.com/), it only applies to [Douyin](https://www.douyin.com/) in mainland China
## Why was this script born?
Because only the client can watch in some live of Douyin, it is impossible to obtain any information of ChatRoom through browser capture
## How it works?
Just use [AutoX.js](https://github.com/kkevsekk1/AutoX/blob/dev-test/README_en.md). Simply put, it can get any component in the Android program, and we can do more things after getting the component and component content.  
## Will my Douyin account be banned for using this script?
You don't have to worry at all, these scripts just read the content of the new component. Even if you add an automatic reply to it, it's the same as a normal user clicking on the phone  
But it is still not recommended to send a lot of repeated texts in a short period of time, otherwise even normal users will be risk controlled, and the Douyin server will intercept your messages accordingly
## How are these scripts used?
⚠ This script only supports Android system devices (of course not limited to mobile phones)  
Open these after installing AutoX.js  
![image](https://user-images.githubusercontent.com/33407430/223605884-8716a9ae-8f59-44e3-b104-787f143a3ec6.png)  
(The "Connected to computer" option is turned on as needed. If this option is turned on, you can remotely/batch control a bunch of mobile phones to run scripts directly on the computer, [Deploy in Visual Code Studio by referring to AutoX.js documentation](https://marketplace.visualstudio.com/items?itemName=aaroncheng.auto-js-vsce-fixed))  
  
Then open the live room you want to extract the chatroom information on Douyin, and it can start running
## Here are some demos, although they are in Chinese, it should not affect understanding
### The live ChatRoom used as a demonstration I blocked the screen to avoid copyright issues, this is an active live ChatRoom I randomly found
When there is a new message in the live ChatRoom, the script will split the message and output it to the console, and you can get the fanclub, nickname, message and other information through the array  
![normal](https://user-images.githubusercontent.com/33407430/223620132-8ed4ce61-f30b-4cc8-a0b7-8b8603c45970.gif)  
When a new gift is received, the script will split the giver's nickname and the gift, and automatically open the text input box to fill in the text and send it  
![gift](https://user-images.githubusercontent.com/33407430/223620593-8ac7691c-4293-4933-9c73-ec5b6ec47489.gif)  
When a new audience enters the live ChatRoom, split the information to get the nickname of the new audience entering the live broadcast room, fill it into the text box, and send a random welcome speech  
![welcome](https://user-images.githubusercontent.com/33407430/223620628-11bc29d9-880d-40b9-a46d-e5ce01e212ed.gif)  
   
 Of course, you can also use websocket to output any information to any program on the computer (Unreal, unity...)
  
   
 Please do not use the above for commercial use, enjoy!
