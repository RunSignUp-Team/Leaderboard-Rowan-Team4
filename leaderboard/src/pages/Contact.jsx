import React from 'react';
import logo from '../runsignup_logo.png';
import SubmitButton from '../Components/page1Submit.js'

console.log(logo);

function Contact() {
    return (
        <>
        <center>
        <h1>this is the contact page</h1>
        <h2>asdasdasdsadasdd</h2>
        <img src={logo} alt="Logo" />

        <SubmitButton />
        </center>
        </>
        
    );
     
}

export default Contact;