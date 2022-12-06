import React from "react";
const { ipcRenderer } = window.require('electron');

function County() {

  function sendChange() {
    ipcRenderer.send('countyChecked')
  }


    return (<label className="container">County
  <input type="checkbox" onChange={sendChange}/> {}
  <span className="checkmark" />
    </label>)
  

}

export default County;