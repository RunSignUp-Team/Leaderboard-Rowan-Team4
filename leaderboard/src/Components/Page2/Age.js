import React from "react";
const { ipcRenderer } = window.require('electron');

function Age() {

  function sendChange() {
    ipcRenderer.send('ageChecked')
  }


    return (<label className="container">Age
  <input type="checkbox" onChange={sendChange}/> {}
  <span className="checkmark" />
    </label>)
  

}

export default Age;