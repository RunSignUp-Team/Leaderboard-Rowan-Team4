const electron = require('electron');

require('../src/Message-Control/main');


const mainFile = require('../src/Message-Control/main')

const { app } = electron;
const { BrowserWindow } = electron;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,        },
    });
    mainWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.once('did-finish-load', () => {
        console.log("hhhh")
     })
}

app.on('ready', () => {
    createWindow();
    mainFile.processRacesAndEvents();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        mainFile.resetDB();
        app.quit();
    }
});


app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
    
});
