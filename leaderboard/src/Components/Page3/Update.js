import { useEffect } from 'react';
const { ipcRenderer } = window.require('electron');

function Update({info}) {

    const FIVE_SECONDS_MS = 5000;



    useEffect(() => {
      const interval = setInterval(() => {
        if(navigator.onLine) {
          getResults();
          ipcRenderer.send('resultsUpdated')
        }
      }, FIVE_SECONDS_MS );
    
      return () => clearInterval(interval); 
    }, [])
    

}

function getResults() {
    ipcRenderer.send('get_results');
}

export default Update;