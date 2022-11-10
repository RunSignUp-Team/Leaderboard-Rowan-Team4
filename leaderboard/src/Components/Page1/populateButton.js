import React, { Component } from 'react';
import { channels } from '../../shared/constants.js';

const { ipcRenderer } = window.require('electron');



export class Populate extends Component {



  render() {

    const getData = () => {
        ipcRenderer.send(channels.GET_DATA);
    }

    return(
        <button type="button" onClick={getData}>
        Populate
    </button>
    )
  }

}
