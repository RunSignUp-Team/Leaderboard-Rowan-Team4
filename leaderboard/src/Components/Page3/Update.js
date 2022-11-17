import { useEffect } from 'react';
import { channels } from '../../shared/constants.js';
const { ipcRenderer } = window.require('electron');

function Update() {

    const THIRTY_SECONDS_MS = 30000;

    useEffect(() => {
      const interval = setInterval(() => {
        getResults();
        console.log('Updated results (every 30 seconds)');
      }, THIRTY_SECONDS_MS );
    
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])


}

function getResults() {
    ipcRenderer.send(channels.GET_RESULTS);
}

export default Update;