import React from "react";
const { ipcRenderer } = window.require('electron');

function State() {

  function sendChange() {
    ipcRenderer.send('stateChecked')
  }


    return (<label className="container">State
  <input type="checkbox" onChange={sendChange}/> {}
  <span className="checkmark" />
    </label>)
  

}

export default State;