import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { UserService } from '../user.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  chat;
  db = firebase.firestore();
  messages = [];
  newmessage = "";
  name = "";
  constructor(
    public route: ActivatedRoute,
    public userService: UserService
  ) {
    var self = this;
    this.name = this.userService.username;
    setTimeout(() => {
      let doc = self.db.collection("chat").doc(self.chat.id);
      let observer = doc.onSnapshot(docSnapshot => {
        var chat = docSnapshot.data();
        self.messages = chat.chat;
      })
    }, 50);
  }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.chat = param;
      }
    );
  }

  send() {
    if(this.newmessage.length > 0) {
      this.userService.send(this.newmessage,this.chat.id)
      this.newmessage = "";
    }
  }

}
