// Import necessary Electron modules and components
const { app, BrowserWindow, Menu, Tray, ipcMain } = require("electron");
const windowStateKeeper = require("electron-window-state");
const template = require("./customMenu"); // Custom menu template
const contextMenu = require("./contextMenu"); // Context menu template
const path = require("path");

// Check if the app is started by Electron Squirrel installer
if (require("electron-squirrel-startup")) {
  app.quit();
}

// Handle IPC messages from renderer process
ipcMain.on("msg", (event, arg) => {
  console.log(arg);
});

// Create application menu from custom template
let menu = Menu.buildFromTemplate(template);
// Create context menu from template
let context = Menu.buildFromTemplate(contextMenu);

// Set the application menu
Menu.setApplicationMenu(menu);

// Function to create the main window
const createWindow = () => {
  // Create a window state manager
  let win = new windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600,
  });

  // Create a new BrowserWindow
  const mainWindow = new BrowserWindow({
    x: win.x,
    y: win.y,
    width: win.width,
    height: win.height,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Load the main HTML file into the window
  mainWindow.loadFile(path.join(__dirname, "index.html"));
  
  // Open DevTools for debugging
  mainWindow.webContents.openDevTools();

  // Show context menu on right-click
  mainWindow.webContents.on("context-menu", () => {
    context.popup();
  });

  // Manage window state with windowStateKeeper
  win.manage(mainWindow);

  // Create a system tray icon
  const tray = new Tray(path.join(__dirname, "../image.jpg"));
  tray.setToolTip("Tray from Electron");

  // Toggle window visibility on tray icon click
  tray.on("click", () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });
};

// Event handler when Electron app is ready
app.on("ready", createWindow);

// Event handler when all windows are closed
app.on("window-all-closed", () => {
  // Quit the app if not on macOS
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Event handler when app is activated (e.g., clicked on dock icon on macOS)
app.on("activate", () => {
  // Create a new window if there are no windows open
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
