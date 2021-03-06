import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  
  currUser = {
    'posts': 0,
    'status': "",
    'username': "",
    'image': "",
    'followers': 0,
    'following': 0,
    'fullname':"",
    'privateStat': true
  }

  profile_segment = "grid";

  userPosts = [];
  saved = [];

  constructor(
    public userService: UserService,
    public router: Router
  ) {
      this.userService.getObservable().subscribe((data) => {
        this.currUser.posts = this.userPosts.length;
        this.currUser.username = this.userService.username;
        this.userPosts = this.userService.homePosts;
        this.saved = this.userService.savedPosts;
        this.currUser.image = this.userService.image;
        this.currUser.fullname = this.userService.fullname;
        this.currUser.followers = this.userService.followers.length;  
        this.currUser.following = this.userService.following.length;
        this.currUser.status = this.userService.status;
        this.currUser.privateStat = this.userService.privateStat;
        this.userPosts.sort((a,b) => (a.posted < b.posted) ? 1: -1);
    });
    this.saved = this.userService.savedPosts;
    this.userPosts = this.userService.homePosts;
    this.currUser.posts = this.userPosts.length;
    this.currUser.username = this.userService.username;
    this.currUser.image = this.userService.image;
    this.currUser.fullname = this.userService.fullname;
    this.currUser.followers = this.userService.followers.length;  
    this.currUser.following = this.userService.following.length;
    this.currUser.status = this.userService.status;
    this.currUser.privateStat = this.userService.privateStat;
    this.userPosts.sort((a,b) => (a.posted < b.posted) ? 1: -1);
  }

  ngOnInit() {
  }

  goToEdit() {
    this.router.navigate(["/edit"]);
  }

  goToFollowers() {
    this.router.navigate(["/followers"]);
  }

  commentSize(post) {
    var bool = false;
    var comments = post.comments;
    if(comments.length !== 0) {
      bool = true;
    }
    return bool;
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

  ifCaption(post) {
    var bool = false;
    var caption = post.caption;
    if(caption.length !== 0) {
      bool = true;
    }
    return bool;
  }

  like(post) {
    this.userService.like(post);
    var arr = post.likes;
    arr.push(this.userService.userDoc)
  }

  unlike(post) {

  }
  comment(post) {
    this.router.navigate(["/comments",post])
  }

}
