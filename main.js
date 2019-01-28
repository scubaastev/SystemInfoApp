const{app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');


//init iwn
//window object, window will close automatically if javascript is garbage collected
let win;

//create browser window
function createWindow(){
  win = new BrowserWindow({electron: 800, height:600, icon:__dirname+'/img/logo1'});

  //load index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname,'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // open devtools
  win.webContents.openDevTools();

  win.on('closed',()=>{
    win=null;
  });
}
//run create window function
app.on('ready', createWindow);

//quit when all windows are closed
app.on('window-all-closed',()=>{
  if(process.platform !=='darwin'){
    app.quit();
  }
});
