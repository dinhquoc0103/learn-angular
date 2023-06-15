import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  address: string;
  birthday: Date | null;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = {
    name: '',
    address: '',
    birthday: null,
  };

  constructor() { }

  ngOnInit(): void {
    this.user = {
      name: 'justin bieber',
      address: 'Canada',
      birthday: new Date(1994, 3 - 1, 1),
    }
  }

}
