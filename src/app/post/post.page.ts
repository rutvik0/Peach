import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { UserService } from '../user.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  img="/assets/test.png";
  randomId = Math.random().toString(36).substr(2, 5);
  caption = "";
  cam = false;
  post = true;

  constructor(
    private camera: Camera,
    public userService: UserService
  ) {

   }

  ngOnInit() {
  }

  takePic(sourceType:number) {
    var self = this;
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:sourceType,
      targetHeight: 500,
      targetWidth: 500,
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = `data:image/jpeg;base64,${imageData}`;
      self.img = base64Image;
      self.cam = true;
      self.post = false;

      const picture = firebase.storage().ref(this.randomId);
      picture.putString(base64Image,'data_url');
    }, (err) => {
      // Handle error
    });
  }

  makePost() {
    var self = this;
    var storageRef = firebase.storage().ref();
    storageRef.child(this.randomId).getDownloadURL().then(function(url) {
      self.userService.makePost(url,self.caption);
    });

    setTimeout(() => {
      this.img = "assets/test.png";
      this.cam = false;
      this.post = true;
      this.caption = "";
      this.randomId = Math.random().toString(36).substr(2, 5);
    }, 500);
  }

}
