const electron = require('electron');
const ffmpg = require('fluent-ffmpeg');
const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('videoSubmit', (event, path) => {
    ffmpeg.ffprobe(path, (err, metadata) => {
        console.log('file length is: ', metadata.format.duration)
    });
});