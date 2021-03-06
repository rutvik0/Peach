import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  new_item_form: FormGroup;
  db = firebase.firestore();
  imgfile="/assets/logo.png";

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public userService:UserService
  ) { }

  ngOnInit() {
    this.new_item_form = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signup() {
    this.router.navigate(["/signup"]);
  }

  login(item) {
    var self = this;
    var email = item.email;
    var password = item.password;
    
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result) {
      var user= firebase.auth().currentUser;
          self.db.collection("users").where("uid", "==", user.uid)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    var username = doc.data().username;
                    var image = doc.data().image;
                    var followers = doc.data().followers;
                    var following = doc.data().following;
                    var posts = doc.data().posts;
                    var status = doc.data().status;
                    var fullname = doc.data().fullname;
                    var privateStat = doc.data().privateStat;
                    var userDoc = doc.id;
                    var saved = doc.data().saved;
                    self.userService.setUsername(username,image,status,posts,followers,following,fullname,privateStat,userDoc,saved);
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        self.router.navigate(["/tabs/tab1"]);

          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);

      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else if (errorCode === 'auth/user-not-found'){
        alert("User does not exist");
      }
      console.log(error);
    });
    this.new_item_form.reset();
  }
}
