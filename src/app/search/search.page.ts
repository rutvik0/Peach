import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  users: any[];
  searchTerm: string;

  constructor(
    public userService: UserService,
    public router: Router
  ) { 
    this.initializeList();
  }

  ngOnInit() {
    this.initializeList();
  }

  goToUser(user) {
    this.router.navigate(["/user",user]);
  }

  initializeList() {
    this.userService.getObservable().subscribe((data) => {
      this.users = this.userService.users;
    })
    this.users = this.userService.users;
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

}

export interface Users {
  username: string;
}
