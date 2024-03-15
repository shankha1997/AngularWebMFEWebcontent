cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-mlkit-barcode-scanner.cordova-plugin-ml-kit-barcode-scanner",
      "file": "plugins/cordova-plugin-mlkit-barcode-scanner/www/BarcodeScanner.plugin.js",
      "pluginId": "cordova-plugin-mlkit-barcode-scanner",
      "clobbers": [
        "cordova.plugins.mlkit.barcodeScanner"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-mlkit-barcode-scanner": "3.0.7",
    "cordova-plugin-camera": "7.0.0"
  };
});