import React from 'react';
import ReactDOM from 'react-dom';

setInterval(() => {
        

const d = new Date().getDate();
let month = new Date().getMonth();
const y = new Date().getFullYear();
var months =["January","February","March","April","May","June","July","august","September","October","November","December"];

let m = months[month];

let h = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();

if (h>12) {
        h = h-12;
} else {
        h=h +0;
};



// eslint-disable-next-line no-useless-concat
let currentDate = d+"th " +m+ " " +y;
let currentTime = h +"-"+minute + "-"+second;

ReactDOM.render(
        <>
        <p>{`${currentDate} `}</p>
        <h1>Hello World</h1>
        <p>{`Today's date is ${currentTime}`}</p>
        </>
        ,
        document.getElementById('root')
);

}, 1000);









