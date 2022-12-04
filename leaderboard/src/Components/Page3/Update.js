import { useEffect, React } from 'react';
import { channels } from '../../shared/constants.js';
const { ipcRenderer } = window.require('electron');

function Update({info}) {

    const THIRTY_SECONDS_MS = 10000;



    useEffect(() => {
      const interval = setInterval(() => {
        getResults();
      }, THIRTY_SECONDS_MS );
    
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])
    

}

function getResults() {
    ipcRenderer.send(channels.GET_RESULTS);
}

export default Update;