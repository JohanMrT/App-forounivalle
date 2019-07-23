import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-confirmardatos',
  templateUrl: './confirmardatos.page.html',
  styleUrls: ['./confirmardatos.page.scss'],
})
export class ConfirmardatosPage implements OnInit {

  currentImage: any;
  constructor(private camera: Camera, public actionSheetController: ActionSheetController) { }



  /*tomarFoto(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  this.camera.getPicture(options).then((imageData) => {
    this.currentImage = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
   console.log("Camera issue:" + err);
  });
}*/

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Foto de perfil',
      buttons: [{
        text: 'Camara',
        icon: 'camera',
        handler: () => {
          this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false,
            saveToPhotoAlbum:true,
            sourceType: this.camera.PictureSourceType.CAMERA
          }).then(ImageData => {
            this.currentImage = "data:image/jpeg;base64," + ImageData;
          })
        }
      }, {
        text: 'Galeria',
        icon: 'photos',
        handler: () => {
          this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false,
            saveToPhotoAlbum:true,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
          }).then(ImageData => {
            this.currentImage = "data:image/jpeg;base64," + ImageData;
          })
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }

}
