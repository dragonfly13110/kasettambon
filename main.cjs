const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    mainWindow.loadFile('index.html');
}

ipcMain.handle("save-news", async (event, newsData) => {
    const jsonFilePath = path.join(__dirname, 'src', 'data', 'newsData.json');
    try {
        let fileContent = fs.readFileSync(jsonFilePath, 'utf-8');
        // ลบบรรทัดที่เป็น comment (เช่น // filepath: ...)
        fileContent = fileContent.replace(/\/\/.*\n/g, '');
        let data = JSON.parse(fileContent);
        data.push(newsData);
        fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));
        return { success: true };
    } catch (err) {
        console.error(err);
        return { success: false, error: err.message };
    }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});