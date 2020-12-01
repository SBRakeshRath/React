import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

var greetings = "";
var watch = "";

var cssStyle = { };
cssStyle.color = "green";






 function main() {
        





        var hour = new Date().getHours();
        var minute = new Date().getMinutes();
        var second = new Date().getSeconds();
                
                
        var ArrayGreetings = ["Good Mornings","Good Afternoon","Good evening","Good Night"];
        
        if (hour >= 3  && hour <12) {
                greetings = ArrayGreetings[0];
                
                
                
        }
        else if (hour >= 12 && hour < 18) {
                greetings = ArrayGreetings[1];
                
        }
        else if (hour >= 18 && hour < 20) {
                greetings = ArrayGreetings[2];
                
        }
        else if (hour> 20 || hour < 3) {
                greetings = ArrayGreetings[4];
                
        }
        
        else {
        
                greetings = "Have a good Day";
        }
        if (hour>12) {
                hour = hour-12;
        }
        else if(hour === 0){
                hour = 13;
        }
         watch = hour+"."+minute+"."+second;

        



}
main();
setInterval(main,1000);
function changer(){
        main();
        document.getElementsByClassName('greetings11')[0].innerHTML = greetings;
        document.getElementsByClassName('time')[0].innerHTML = watch;
       console.log(cssStyle);
}
setInterval(changer,1000);





ReactDOM.render(
        <>
                <div className="main">
                        <h1>Hello sir!!</h1>
                        <h2 className="time">{watch}</h2>
                        <div className="greetings">
                        <p className="greetings11" id="hhh" style={cssStyle} >{greetings}{cssStyle.color}</p>
                        </div>
                </div>
                
                


        </>
        ,
        document.getElementById('root')
);


