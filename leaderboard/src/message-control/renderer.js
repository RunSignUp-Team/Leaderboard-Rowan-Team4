const { channels } = require('../shared/constants');
const { ipcRenderer } = window.require('electron');

export default function send(sql) {
    return new Promise((resolve) => {
        ipcRenderer.once(channels.ASYNC_REPLY, (_, arg) => {
            resolve(arg);
        });
        ipcRenderer.send(channels.ASYNC_MESSAGE, sql);
    });
}