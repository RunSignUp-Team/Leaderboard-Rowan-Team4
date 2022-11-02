import React, { Component } from 'react';
import { channels } from '../shared/constants.js';

const { ipcRenderer } = window.require('electron');



export class Fill extends Component {



  render() {

    const fillMap = () => {
        ipcRenderer.send(channels.FILL_MAP);
    }

    return(
        <button type="button" onClick={fillMap}>
        Fill
    </button>
    )
  }

}
