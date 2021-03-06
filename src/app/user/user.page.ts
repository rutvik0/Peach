import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import * as firebase from 'firebase'
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})

export class UserPage implements OnInit {

  current_user;
  db = firebase.firestore();
  postId = [];
  posts = [];
  followingUser;

  profile_segment = "grid";

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public userService: UserService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {
    var self = this;
    setTimeout(() => {
      var postRef = this.db.collection("users").doc(self.current_user.id);
      postRef.get().then(function(doc) {
        var user = doc.data();
        self.postId = user.posts;
      })
      setTimeout(() => {
        for(let id of self.postId) {
          var ref = this.db.collection("posts").doc(id);
          ref.get().then(function(doc) {
            var post = doc.data();
            self.posts.push({caption:post.caption,comments:post.comments,
              id:post.id,image:post.image,likes:post.likes,posted:post.posted,
              userimg:post.userimg,username:post.username,pid:doc.id});
          })
        }
      }, 300);
    }, 50);

    this.userService.getObservable().subscribe((data) => {
      this.followingUser = this.userService.following;
    });
    
    this.followingUser = this.userService.following;
  }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.current_user = param;
      }
    )
  }

  

  commentSize(post) {
    var bool = false;
    var comments = post.comments;
    if(comments.length !== 0) {
      bool = true;
    }
    return bool;
  }

  ifCaption(post) {
    var bool = false;
    var caption = post.caption;
    if(caption.length !== 0) {
      bool = true;
    }
    return bool;
  }

  follow() {
    var self = this;
    var bool = true;
    var currUser = firebase.auth().currentUser.uid;
    var userRef = this.db.collection("users").doc(self.current_user.id);
    userRef.onSnapshot(doc => {
      var user = doc.data();
      var userFriend = user.followers;
      for(let item of userFriend) {
        if(item.uid == currUser) {
          bool = false;
        }
      }
    })
    setTimeout(function(){
    if(bool) {
      self.followToast();
      self.userService.follow(self.current_user);
    } else {
      self.alreadyToast();
    }
    }, 1000);
  }
  async alreadyToast() {
    const toast = await this.toastController.create({
      color:'danger',
      message: 'Follow request already sent',
      position:'bottom',
      duration: 1000
    });
    toast.present();
  }

  async followToast() {
    const toast = await this.toastController.create({
      color:'success',
      message: 'Follow request sent',
      position:'bottom',
      duration: 1000
    });
    toast.present();
  }
  following() {
    var self = this;
    var bool = false;

    for(let item of this.followingUser) {
      if(item.uid == self.current_user.uid) {
        bool = true;
      }
    }
    return bool;
  }

  async unfollow() {
    var self = this;
    const alert = await this.alertController.create({
      header: 'Unfollow',
      message: 'Please confirm unfollow',
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {

        }
      },
      {
        text: 'Confirm',
        role: 'confirm',
        handler: () => {
          self.userService.unfollow(this.current_user);
          self.unfollowToast();
        }
      }
      ]
    });
    await alert.present();
  }

  async unfollowToast() {
    const toast = await this.toastController.create({
      color:'success',
      message: 'User unfollowed',
      position:'bottom',
      duration: 1000
    });
    toast.present();
  }

  liked(post) {
    var self = this;
    var bool = false;
    for(let user of post.likes) {
      if(user == self.userService.userDoc) {
        bool = true;
      }
    }
    return bool;
  }
  
  like(post) {
    this.userService.like(post);
    var arr = post.likes;
    arr.push(this.userService.userDoc)
  }

  comment(post) {
    this.router.navigate(["/comments",post])
  }
  
  unlike(post) {
    this.userService.unlike(post);
    var arr = post.likes;
    const index = arr.indexOf(this.userService.userDoc, 0);
    if(index > -1) {
      arr.splice(index, 1);
    }
  }
}
