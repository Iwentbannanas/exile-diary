
$(document).ready(() => {
  var e = require('electron');
  var width = e.remote.getCurrentWindow().getBounds().width;
  setZoomFactor(Math.min(width, 1100) / 1100);
});

require('electron').ipcRenderer.on("rescale", (event, f) => {
  setZoomFactor(f);
});

function setZoomFactor(f) {
  require('electron').webFrame.setZoomFactor(f);
}
