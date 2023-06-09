import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['h1 {color: red}']
})

// Cho các phần trước class and style binding
// export class HomeComponent implements OnInit {
//   public name = "dominicf";
//   public phone = '012345678920';
//   public address = 'america';
//   public weight = 500;

//   constructor() {
//     console.log(20);
//   }

//   public ngOnInit(): void {
//     console.log(18);
//   }

//   public sayHello(): void {
//     console.log("Hello");
//   }

// }

// public onSale = true;
// public myClass = { foo: true, bar: false };

// Dành cho class và style binding 
export class HomeComponent implements OnInit {
  public clicked = false;

  constructor() { }

  public ngOnInit(): void { }

  public onClickMe() {
    this.clicked = !this.clicked;
    const txtClicked = this.clicked ? "Clicked" : "Haven't clicked";
    console.log(txtClicked);
  }

  public onEnter(event: any) {
    console.log(event.target.value);
  }
}



