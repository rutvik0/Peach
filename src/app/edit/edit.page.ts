import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UserService } from '../user.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  currUser = {
    'status': "",
    'username': "",
    'image': "",
    'fullname':"",
    'privateStat': true
  };

  original = {
    'status': "",
    'username': "",
    'image': "",
    'fullname':"",
    'privateStat': true
  };

  randomId = Math.random().toString(36).substr(2, 5);
  constructor(
    public router: Router,
    private alertCtrl: AlertController,
    public userService: UserService,
    private camera: Camera
  ) {
    this.userService.getObservable().subscribe((data) => {
      this.currUser.username = this.userService.username;
      this.currUser.image = this.userService.image;
      this.currUser.fullname = this.userService.fullname;
      this.currUser.status = this.userService.status;
      this.currUser.privateStat = this.userService.privateStat;
      
      this.original.username = this.userService.username;
      this.original.image = this.userService.image;
      this.original.fullname = this.userService.fullname;
      this.original.status = this.userService.status;
      this.original.privateStat = this.userService.privateStat;
    });
    this.currUser.username = this.userService.username;
    this.currUser.image = this.userService.image;
    this.currUser.fullname = this.userService.fullname;
    this.currUser.status = this.userService.status;
    this.currUser.privateStat = this.userService.privateStat;

    this.original.username = this.userService.username;
    this.original.image = this.userService.image;
    this.original.fullname = this.userService.fullname;
    this.original.status = this.userService.status;
    this.original.privateStat = this.userService.privateStat;
  }

  ngOnInit() {

  }

  async editPhoto() {
    const alert = await this.alertCtrl.create({
      header: 'Upload or Remove',
      message: 'Do you want to upload your profile or remove?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel button clicked');
          }
        },
        {
          text: 'Capture',
          role: 'capture',
          handler: () => {
            console.log('Upload button clicked');
            this.takePic(1);
          }
        },
        {
          text: 'Galery',
          role: 'gallery',
          handler: () => {
            console.log('Upload button clicked');
            this.takePic(0);
          }
        },
        {
          text: 'Remove',
          role: 'remove',
          handler: () => {
            this.removePic();
            this.currUser.image = "assets/avatar.png"
          }
        }
      ]
    });
    await alert.present();
  }

  logout(){
    firebase.auth().signOut().then(function() {
      console.log("You are logged Out. Good Bye!!")
    })
    .catch(function(error) {
    });
    this.router.navigate(["/login"]);
  }

  removePic() {
    if(this.currUser.image != "assets/avatar.png") {
      this.currUser.image = "assets/avatar.png";
      this.userService.removeProfilePic();
    } else {
      console.log("No image available")
    }
  }

  async takePic(sourceType:number) {
    var self = this;
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      targetHeight: 400,
      targetWidth: 400,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType,
    }

     this.camera.getPicture(options).then((result) => {
      const image = `data:image/jpeg;base64,${result}`;
      const pictures = firebase.storage().ref(this.randomId);
        pictures.putString(image, 'data_url');

       setTimeout(() => { 
        var storageRef = firebase.storage().ref();
        storageRef.child(this.randomId).getDownloadURL().then(function(url) {
          self.currUser.image = url;
          self.userService.updateImage(url);
        });
        }, 2000);
     });
   }

   apply() {
     this.userService.updateProfile(this.currUser.fullname,this.currUser.username,
                                    this.currUser.status,this.currUser.privateStat)
   }
}
