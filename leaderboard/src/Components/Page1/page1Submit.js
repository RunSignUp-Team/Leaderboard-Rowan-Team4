import React, { Component, useState, useEffect, setState } from 'react';
import sendAsync from '../../message-control/renderer';
import { Link } from "react-router-dom";

const { ipcRenderer } = window.require('electron');

export default function SubmitButton(props) {



  function sendIDs(){

    const ID = {
      raceName : props.race,
      eventName : props.event
    }

    ipcRenderer.send('storeRaces', ID);
    ipcRenderer.send('resetResults');
  }
  
  

    return  (

      <div className="pageButton">
      <Link to="/page2">
          <button disabled = {props.buttonCondition} type="submit" onClick = {sendIDs}> Submit </button>
          
      </Link>
      </div>
          
    );
  
}