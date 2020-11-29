import React from 'react';
import ReactDOM from 'react-dom';


const firstname = "Rakesh";
const lastname = "Rath";


ReactDOM.render(
        <>
        <h2>My name is (Bhag be!!!)</h2>
<p>My actual name is {firstname} {lastname}</p>
<h1>Some Mathematical Functions</h1>
<ol>
        <li>The value of 2+3 is {2+3}</li>
        <li>The value of 2*3 is {2*3}</li>
        <h4>A random number</h4>
        <li>{Math.random()}</li>
</ol>


        </>
        ,
        document.getElementById('root')
);


