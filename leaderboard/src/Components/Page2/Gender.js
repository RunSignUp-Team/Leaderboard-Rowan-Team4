import React from "react";
const { ipcRenderer } = window.require('electron');

function Gender() {

  function sendChange() {
    ipcRenderer.send('genderChecked')
  }


    return (<label className="container">Gender
  <input type="checkbox" onChange={sendChange}/> {}
  <span className="checkmark" />
    </label>)
  

}

export default Gender;