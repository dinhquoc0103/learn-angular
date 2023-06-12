import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleIncreaseNumber() {
    this.count = this.count + 1;
    console.log("Đã nhấn", this.count, "lần");
  }

}
