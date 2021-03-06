import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  following = [];
  followingPosts = [];
  id = "";
  save = [];

  db = firebase.firestore();
  constructor(
    public userService: UserService,
    public router: Router
  ) {
    setTimeout(() => {
      var self = this;
      this.userService.getObservable().subscribe((data) => {
        this.following = [];
        this.save = [];
        this.save = this.userService.saved;
        self.following = this.userService.followingPosts;
        self.id = this.userService.userDoc;
        self.followingPosts = self.following;
        self.followingPosts.sort((a,b) => (a.posted < b.posted) ? 1: -1);
      })
      this.following = [];
      this.save = [];
      this.save = this.userService.saved;
      self.following = this.userService.followingPosts;
      self.id = this.userService.userDoc;
      self.followingPosts = self.following;
      self.followingPosts.sort((a,b) => (a.posted < b.posted) ? 1: -1);
    }, 1000);
    
  }

  liked(post) {
    var self = this;
    var bool = false;
    for(let user of post.likes) {
      if(user == self.id) {
        bool = true;
      }
    }
    return bool;
  }

  saved(post) {
    var self = this;
    var bool = false;
    if(this.save.includes(post.pid)) {
      bool = true;
    }
    return bool;
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

  ngOnInit() {
  }

  bookmark(post) {
    this.userService.bookmark(post);
  }
  
  unsave(post) {
    this.userService.unsave(post);
  }
  
  like(post) {
    this.userService.like(post);
    var arr = post.likes;
    arr.push(this.id)
  }

  comment(post) {
    this.router.navigate(["/comments",post])
  }
  
  unlike(post) {
    this.userService.unlike(post);
    var arr = post.likes;
    const index = arr.indexOf(this.id, 0);
    if(index > -1) {
      arr.splice(index, 1);
    }
  }

  chatList() {
    this.router.navigate(["/chatlist"]);
  }
}
