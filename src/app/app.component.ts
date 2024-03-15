import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from "./common/toast/toast.component";

declare let navigator: any;
declare let cordova: any;
declare let Camera: any;

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ToastComponent]
})
export class AppComponent {
  title = 'angularWebpluginTest';

  ngOnInit() { }

  showToast(){
    
  }

  openCam(sourceType: any) {
    const Camera = navigator.camera;
    Camera.getPicture((imageUri: any) => {
      console.log(imageUri);
    },
      (error: any) => {
        console.log("Unable to obtain picture: " + error);

      }, {
      quality: 50,
      correctOrientation: true,
      destinationType: 0,
      sourceType : sourceType
    }
    );
  }

  openBarCodeScanner() {
    const defaultOptions = {
      barcodeFormats: {
        Code128: true,
        Code39: true,
        Code93: true,
        CodaBar: true,
        DataMatrix: true,
        EAN13: true,
        EAN8: true,
        ITF: true,
        QRCode: true,
        UPCA: true,
        UPCE: true,
        PDF417: true,
        Aztec: true,
      },
      beepOnSuccess: false,
      vibrateOnSuccess: false,
      detectorSize: 0.6,
      rotateCamera: false,
    };

    cordova.plugins.mlkit.barcodeScanner?.scan(defaultOptions, (result: any) => {
      // Do something with the data
      console.log(result);
    },
      (error: any) => {
        console.log(error);
        // Error handling
      },
    );
  }
}
