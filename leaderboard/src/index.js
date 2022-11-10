import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { BrowserRouter, Routes, Route } from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



const ipc = window.require('electron').ipcRenderer;
  
// Function that will be called on click 
// event of "Go to settings window" button
function goToSettingsWindow(){
  
    // Make sure to do ipc.send('some String'), 
    // where 'some String' must be same with 
    // the first parameter of ipcMain.on() in app.js 
    ipc.send('openChildWindow');  
}


const remote = window.require("electron").remote;
  
function goToFirstWindow() {
  //code for some other action to be performed
  
  //Code to close the window after doing other actions
  remote.getCurrentWindow().close();
}

