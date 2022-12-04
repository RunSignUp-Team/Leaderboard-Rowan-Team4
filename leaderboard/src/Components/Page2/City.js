import React from "react";
const { ipcRenderer } = window.require('electron');

function City() {

  function sendChange() {
    ipcRenderer.send('cityChecked')
  }


    return (<label className="container">City
  <input type="checkbox" onChange={sendChange}/> {}
  <span className="checkmark" />
    </label>)
  

}

export default City;