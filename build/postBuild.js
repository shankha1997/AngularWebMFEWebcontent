const fse = require('fs-extra');
const path = require('path');
const fs = require('fs');
const util = require('util');

const sourceFolderPath = 'D:/CodingPractise/angularWebpluginTest/cordova.js';
const destinationFolderPath = 'D:/CodingPractise/angularWebpluginTest/dist/angular-webplugin-test/browser/cordova.js';

const sourceFolderPathCordovaPlugins = 'D:/CodingPractise/angularWebpluginTest/cordova_plugins.js';
const destinationFolderPathCordovaPlugins = 'D:/CodingPractise/angularWebpluginTest/dist/angular-webplugin-test/browser/cordova_plugins.js';

const srcDir = `D:/CodingPractise/angularWebpluginTest/plugins`;
const destDir = `D:/CodingPractise/angularWebpluginTest/dist/angular-webplugin-test/browser/plugins`;


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
        console.log('Folder moved!')
    }
})