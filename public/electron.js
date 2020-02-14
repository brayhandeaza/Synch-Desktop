const { app , BrowserWindow, Menu} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
let win

createWindow = () => {
  win = new BrowserWindow({width: 900, height: 680});
  win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    win.webContents.openDevTools()
  }
  win.on('closed', () => win = null)
}

const template = []
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})