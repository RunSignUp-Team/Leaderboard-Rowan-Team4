import { useEffect } from 'react';
import { channels } from '../../shared/constants.js';
const { ipcRenderer } = window.require('electron');

function Update({info}) {

    const THIRTY_SECONDS_MS = 5000;



    useEffect(() => {
      const interval = setInterval(() => {
        if(navigator.onLine) {
          getResults();
          ipcRenderer.send('resultsUpdated')
        }
      }, THIRTY_SECONDS_MS );
    
      return () => clearInterval(interval); 
    }, [])
    

}

function getResults() {
    ipcRenderer.send(channels.GET_RESULTS);
}

export default Update;