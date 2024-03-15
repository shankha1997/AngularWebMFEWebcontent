const fse = require('fs-extra');
const path = require('path');
const fs = require('fs');
const util = require('util');

const sourceFolderPath = './cordova/cordova.js';
const destinationFolderPath = './dist/angular-webplugin-test/browser/cordova.js';

const sourceFolderPathCordovaPlugins = './cordova/cordova_plugins.js';
const destinationFolderPathCordovaPlugins = './dist/angular-webplugin-test/browser/cordova_plugins.js';

const srcDir = `./plugins`;
const destDir = `./dist/angular-webplugin-test/browser/plugins`;


fs.copyFile(sourceFolderPath, destinationFolderPath, (err) => {
    if (err) throw err;
    console.log('cordova.js is copied to deploy folder');
});

fs.copyFile(sourceFolderPathCordovaPlugins, destinationFolderPathCordovaPlugins, (err) => {
    if (err) throw err;
    console.log('cordova_plugins.js is copied to deploy folder');
});

fs.cp(srcDir, destDir, { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Plugins Folder moved!')
    }
})