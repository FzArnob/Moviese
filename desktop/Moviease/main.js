const electron = require('electron');
const path = require('path');
const { ipcMain } = require('electron');

// Module to control application life.
const app = electron.app;

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const url = require('url')

// Keep a global reference of the windows object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let screenWindow;
let engWindow;
let hinWindow;
let tvWindow;
let searchWindow;
let videoWindow;
function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 800, height: 600, frame: false, autoHideMenuBar: true});
    screenWindow = new BrowserWindow({ width: 800, height: 600, show: false});
    // and load the index.html of the app.
    mainWindow.loadFile('index.html')
    // and load the second window.
    screenWindow.loadURL('https://www.mojaloss.stream/');
    screenWindow.once('ready-to-show', () => {
      screenWindow.webContents.executeJavaScript(`
      function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
      }
    try{
        setCookie('wordpress_logged_in_68c526a5b114f2027adee3c7a7977de6', 'wordpress_logged_in_68c526a5b114f2027adee3c7a7977de6', 2); 
        console.log("CookieLoaded");
    } catch (err) {
        console.log("CookieLoadFailed");
    }`);
      
      // screenWindow.show()
    })

    // Attach event listener to event that requests to update something in the second window
    // from the first window
    ipcMain.on('request-update-label-in-second-window', (event, arg) => {
        // Request to update the label in the renderer process of the second window
        screenWindow.webContents.send('action-update-label', arg);
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        screenWindow.close();
        mainWindow = null;
        screenWindow = null;
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})