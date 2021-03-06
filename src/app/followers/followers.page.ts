import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.page.html',
  styleUrls: ['./followers.page.scss'],
})
export class FollowersPage implements OnInit {

  followers = [];
  requests = [];
  allfollowers = [];

  constructor(public userService: UserService,
              private toastController: ToastController) {
    this.userService.getObservable().subscribe((data) => {
      this.allfollowers = this.userService.followers;
      this.followers = [];
      this.requests = [];
      for(let friend of this.allfollowers){
        if(friend.status == "req") {
          this.requests.push(friend);
        } else {
          this.followers.push(friend);
        }
      }
    });
    this.allfollowers = this.userService.followers;
    this.followers = [];
    this.requests = [];
    for(let friend of this.allfollowers){
      if(friend.status == "req") {
        this.requests.push(friend);
      } else {
        this.followers.push(friend);
      }
    }
  }

  ngOnInit() {
  }

  reqAccept(user) {
    var self = this;
    console.log("Accepted");
    const index = self.allfollowers.indexOf(user);
    if (index > -1) {
    self.allfollowers.splice(index, 1);
    }
    self.acceptToast();
    self.userService.reqAccept(user);
  }

  reqReject(user) {
    var self = this;
    console.log("Rejected");
    const index = self.allfollowers.indexOf(user);
    if (index > -1) {
    self.allfollowers.splice(index, 1);
    }
    self.rejectToast();
    self.userService.reqReject(user);
  }

  async acceptToast() {
    const toast = await this.toastController.create({
      color:'success',
      message: 'Friend Request Accepted',
      position:'bottom',
      duration: 2000
    });
    toast.present();
  }

  async rejectToast() {
    const toast = await this.toastController.create({
      color:'danger',
      message: 'Friend Request Rejected',
      position:'bottom',
      duration: 2000
    });
    toast.present();
  }
}
