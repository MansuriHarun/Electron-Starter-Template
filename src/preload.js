const { ipcRenderer } = require("electron");

function shareData() {
    console.log("This is from Renderer");
    ipcRenderer.send("msg", "Hello From Renderer");
}

shareData();