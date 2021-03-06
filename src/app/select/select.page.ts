import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {

  users = [];
  allfollowers = [];
  chatUser = [];


  constructor(
    public userService: UserService
  ) {
    this.initializeList();
  }

  ngOnInit() {
  }

  initializeList() {
    this.userService.getObservable().subscribe((data) => {
      this.allfollowers = this.userService.followers;
      this.users = [];

      for(let friend of this.allfollowers){
        if(friend.status != "req") {
          this.users.push(friend);
        }
      }
    });

    this.allfollowers = this.userService.followers;
    this.users = [];
    for(let friend of this.allfollowers){
      if(friend.status != "req") {
        this.users.push(friend);
      }
    }
  }

  async filterList(event) {
    this.initializeList();
    const val = event.target.value;
    if(val && val.trim() != '') {
      this.users = this.users.filter((user: Users) => {
        return (user.username.toLocaleLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    }
  }

  selected() {
    var bool = false;
    if(this.chatUser.length != 0) {
      bool = true;
    }
    return bool;
  }

  userSelect(user) {
    var bool = false;
    if(this.chatUser.length != 0 && !this.chatUser.includes(user)) {
      bool = true;
    }
    return bool;
  }

  select(user) {
    var self = this;
    if(this.chatUser.includes(user)) {
      const index = self.chatUser.indexOf(user);
      if (index > -1) {
        self.chatUser.splice(index, 1);
      }
    } else {
    this.chatUser.push(user)
    }
  }

  startChat() {
    var uid = this.chatUser[0].uid;
    console.log(uid);
    this.userService.createChat(this.chatUser)
  }

}

export interface Users {
  username: string;
}