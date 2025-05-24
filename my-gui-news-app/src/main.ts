import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as fs from 'fs';

const newsDataPath = path.join(__dirname, 'data', 'newsData.json');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'renderer.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
        },
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);

ipcMain.on('add-news', (event, newsItem) => {
    fs.readFile(newsDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading news data:', err);
            return;
        }
        const newsData = JSON.parse(data);
        newsData.push(newsItem);
        fs.writeFile(newsDataPath, JSON.stringify(newsData, null, 2), (err) => {
            if (err) {
                console.error('Error writing news data:', err);
            } else {
                event.reply('news-added', newsItem);
            }
        });
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});