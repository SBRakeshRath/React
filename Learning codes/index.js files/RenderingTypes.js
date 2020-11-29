import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//         <div>
//                 <h1>Hello world !!</h1>
//                 <p>I am S B Rakesh Rath</p>
//         </div>
        
//         ,
//         document.getElementById("root"));


        // Another method for rendering in array methpd


// ReactDOM.render(
//         [
//                 <h1>Description</h1>,
//                 <p>Wanted to be a coder</p>,
//         ]
//         ,
//         document.getElementById('root')
// )


//Another method using react.fragment


// ReactDOM.render(
//         <React.Fragment>
//                 <h1>Inside React.fragment</h1>
//                 <p>hello</p>
//         </React.Fragment>,
        
//         document.getElementById('root')
// );


//short cut method to render via react.fragment


ReactDOM.render(
        <>
                <h1>Short cut method for React.Fragment</h1>
                <p>Hello World</p>
        </>
        ,
        document.getElementById('root')
);



// var h1 = document.createElement('h1');

// document.getElementById("root").appendChild(h1);
// h1.innerHTML = "Hellllllo";
