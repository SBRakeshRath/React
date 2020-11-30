import React from 'react';
import ReactDOM from 'react-dom';


const fname = "Rakesh";
const lname = "Rath";

ReactDOM.render(
        <>
                <h1>First Method by concatenate</h1>
                <p>My name is {fname + " " + lname}</p>
                <h1>Second method by Template literals</h1>
                <h3>Rules</h3>
                <ul>
                        <li> use `` (backtick)</li>
                        <li>Before Curly braces use $ </li>
                </ul>

                <h3>Results</h3>

                <p>{`My name is ${fname} ${lname}`}</p>
                <p>{`The addition of 5 & 2 is ${5+2}`}</p>

        </>
        ,
        document.getElementById('root')
);

