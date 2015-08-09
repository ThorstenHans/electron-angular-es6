'use strict';

var app = require('app');
var ipc = require('ipc');
var crashReporter = require('crash-reporter');
var BrowserWindow = require('browser-window');

crashReporter.start({
    productName: 'es6-ng-electron',
    companyName: 'FooBar',
    submitUrl: 'http://localhost:3000/',
    autoSubmit: true
});

var mainWindow = null;

ipc.on('crash', function (event, arg) {
    try {
        process.crash(arg);
    } catch (e) {}
});

ipc.on('devTools', function (event, arg) {
    mainWindow.openDevTools();
});

app.on('window-all-closed', function () {
    // force app termination on OSX when mainWindow has been closed
    if (process.platform == 'darwin') {
        app.quit();
    }
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    // open dev tools after window has been created
    mainWindow.openDevTools();

    mainWindow.loadUrl('file://' + __dirname + '/../browser/index.html');
    mainWindow.webContents.on('did-finish-load', function () {
        mainWindow.setTitle(app.getName());
    });
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});