import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service';
@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {

  chats = [];
  img = "/assets/message.png"
  constructor(
    public router: Router,
    public userService: UserService
  ) {
    this.userService.getObservable().subscribe((data) => {
      this.chats = [];
      this.chats = this.userService.chats;
    });
    this.chats = [];
    this.chats = this.userService.chats;
  }

  ngOnInit() {
  }

  goToChat(chat) {
    this.router.navigate(["/chat",chat])
  }

  goToSelect() {
    this.router.navigate(["/select"])
  }


}
