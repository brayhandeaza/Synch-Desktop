const { app , BrowserWindow, Menu} = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')
let win

createWindow = () => {
  win = new BrowserWindow({minWidth: 1000 , minHeight: 600});
  win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
  }
  win.on('closed', () => win = null)
}
const template = [{
  label: "React",
  submenu: [
    { role: 'about' },
    { type: 'separator' },
    { role: 'services' },
    { type: 'separator' },
    { role: 'hide' },
    { role: 'hideothers' },
    { role: 'unhide' },
    { type: 'separator' },
    { role: 'quit' }
  ]
},
// { role: 'fileMenu' }
{
  label: 'Developer',
  submenu: [{ 
      label: "Toggle Developer Tools",
      accelerator: process.platform === "darwin" ? 'Cmd+Alt+I' : 'Ctrl+Shift+I',
      click() {
        win.webContents.toggleDevTools()
      }
    }]
}
]

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