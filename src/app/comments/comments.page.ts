import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  post;
  caption = "";
  comments = [];
  newmessage;
  username;
  image;
  db = firebase.firestore();

  constructor(
    public route: ActivatedRoute,
    public userService: UserService
  ) {
    var self = this;
    setTimeout(() => {
      self.caption = self.post.caption;
      var ref = this.db.collection("posts").doc(this.post.pid);
      ref.get().then(function(doc) {
        var post = doc.data();
        self.comments = post.comments;
        self.username = post.username;
        self.image = post.userimg;
      })
    }, 50);
  }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.post = param;
      }
    )
  }

  addComment() {
    var self = this;
    if(this.newmessage.length > 0) {
      this.userService.addComment(this.post,this.newmessage);
      this.newmessage = "";

      var ref = this.db.collection("posts").doc(this.post.pid);
      ref.get().then(function(doc) {
        var post = doc.data();
        self.comments = post.comments;
      })
    }
  }
}
