const { ipcRenderer } = window.require('electron');

export default function send(sql) {
    return new Promise((resolve) => {
        ipcRenderer.once('asynchronous-reply', (_, arg) => {
            resolve(arg);
        });
        ipcRenderer.send('asynchronous-message', sql);
    });
}