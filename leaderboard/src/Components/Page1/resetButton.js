import React, { Component } from 'react';
import { channels } from '../../shared/constants.js';

const { ipcRenderer } = window.require('electron');



export class Reset extends Component {



  render() {

    const resetDB = () => {
      ipcRenderer.send(channels.RESET_DB);
  }

    return(
        <button type="button" onClick={resetDB}>
        Reset
    </button>
    )
  }

}
