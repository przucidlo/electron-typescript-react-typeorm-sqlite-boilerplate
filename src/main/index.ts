import { app, BrowserWindow, Menu } from 'electron';
import 'reflect-metadata'; // Required by TypoORM.
import Database from './database/Database';

// Right now this specifies a folder where database files will be stored.
export const defaultStorageFolder = app.getPath('downloads');

const isDev: boolean = !app.isPackaged;

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1024,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // Turns off the application menu.
    // Menu.setApplicationMenu(null);

    global.database = new Database();

    if (isDev) {
        //In case of developement build we use WebpackDevServer to enable HotModuleReload
        //By default WDS will deploy compiled/recompiled files on url http://localhost:8080/
        win.loadURL('http://localhost:8080');

        // Open the DevTools.
        win.webContents.openDevTools();
    } else {
        //TODO: Works on linux, check windows/mac
        win.loadFile('./.webpack/renderer/index.html');
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
