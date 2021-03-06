import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { ToastController } from "@ionic/angular"
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  randomId = Math.random().toString(36).substr(2, 5);
  user={
    email:"",
    password:"",
    name:"",
    fullname:"",
    img:"assets/avatar.png"};

    imgfile = "/assets/logo.png";

    constructor(
      private toastController:ToastController,
      private router:Router
      ) { }
  
    ngOnInit() {
    }

    login() {
      this.router.navigate(["/login"]);
    }

    // async takePic() {
    //   var self = this;
    //    const options: CameraOptions = {
    //      quality:50,
    //      targetHeight: 400,
    //      targetWidth: 400,
    //      destinationType: this.camera.DestinationType.DATA_URL,
    //      encodingType: this.camera.EncodingType.JPEG,
    //      mediaType: this.camera.MediaType.PICTURE
    //    };
  
    //   this.camera.getPicture(options).then((result) => {

    //     const image = `data:image/jpeg;base64,${result}`;
    //     const pictures = firebase.storage().ref(this.randomId);
    //     pictures.putString(image, 'data_url');

    //    setTimeout(() => { 
    //     var storageRef = firebase.storage().ref();
    //     storageRef.child(this.randomId).getDownloadURL().then(function(url) {
    //       self.user.img = url;
    //     });
    //     }, 2000);
    //   })
    //  }

    disabled() {
      var bool = true;
      if(this.user.email.length != 0 &&
        this.user.password.length != 0 &&
        this.user.name.length != 0 &&
        this.user.fullname.length != 0) {
        bool = false;
      }
      return bool;
    }

    signup(){
      var email=this.user.email;
      var password=this.user.password;
      var name = this.user.name;
      var img = this.user.img;
      var fullname = this.user.fullname;
      var self = this;


  firebase.auth().createUserWithEmailAndPassword(email, password).catch(
    function(error) {
    console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      self.errorToast(errorMessage);
      if(errorCode.length > 0){
        console.log("Failed");
      }
      else{
        console.log("signup ok")
      }
    }).then(function(result){
      var user= firebase.auth().currentUser;
       var db = firebase.firestore();
       var followers = [];
       var following = [];
       var posts = [];
       var saved = [];
       var status = "";
		  db.collection("users").add({
		    'uid':user.uid,
        'username': name,
        'image': img,
        'posts': posts,
        'followers': followers,
        'following':following,
        'status':status,
        'fullname':fullname,
        'privateStat':false,
        'saved':saved
		  })
		  .then(function(docRef) {
          console.log("usetype written with ID: ", docRef.id);
		  })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      self.user.fullname = "";
      self.user.img = "/assets/avatar.png"
      self.user.name = "";
      self.user.password = "";
      self.user.email = "";
      self.router.navigate(["/login"]);
    });
  }

    async errorToast(msg) {
      const toast = await this.toastController.create({
        color:'danger',
        message: msg,
        position:'top',
        duration: 1000
      });
      toast.present();
    }
}
