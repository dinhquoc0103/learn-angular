import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject, from, fromEvent, interval, of, timer } from 'rxjs';
import { take } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event: any) {
    // const foo = interval(500).pipe(take(5));

    // const observerBaz = {
    //   next: (x: number) => console.log('first next: ' + x),
    //   error: (err: string) => console.log('first error: ' + err),
    //   complete: () => console.log('first done')
    // };

    // const observerBar = {
    //   next: (x: number) => console.log('second next: ' + x),
    //   error: (err: string) => console.log('second error: ' + err),
    //   complete: () => console.log('second done')
    // };

    // foo.subscribe(observerBaz);

    // setTimeout(() => {
    //   foo.subscribe(observerBar);
    // }, 1500);


    // const foo = interval(500).pipe(take(5));

    // const observerB = {
    //   observers: [],
    //   addObserver(observer: any) {
    //     this.observers.push();
    //   }
    // }

    // const observerBaz = {
    //   next: (x: number) => console.log('first next: ' + x),
    //   error: (err: string) => console.log('first error: ' + err),
    //   complete: () => console.log('first done')
    // };

    // const observerBar = {
    //   next: (x: number) => console.log('second next: ' + x),
    //   error: (err: string) => console.log('second error: ' + err),
    //   complete: () => console.log('second done')
    // };

    // foo.subscribe(observerBaz);

    // setTimeout(() => {
    //   foo.subscribe(observerBar);
    // }, 1500);

    // 1
    // const subject = new Subject<number>();

    // subject.subscribe({
    //   next(value) {
    //     console.log('Observer A:', value);
    //   },
    // });

    // subject.subscribe({
    //   next(value) {
    //     console.log('Observer B:', value);
    //   },
    // });

    // subject.subscribe({
    //   next(value) {
    //     console.log('Observer C:', value);
    //   },
    //   complete() {
    //     console.log('Observer C complete');
    //   },
    // });

    // subject.next(1);
    // subject.next(2);
    // subject.complete();

    // 2
    // const subject = new Subject<number>();

    // subject.subscribe({
    //   next(value) {
    //     console.log('Observer A:', value);
    //   },
    // });

    // subject.subscribe({
    //   next(value) {
    //     console.log('Observer B:', value);
    //   },
    //   complete() {
    //     console.log('Observer B complete');
    //   },
    // });

    // const observable = from([1, 2, 3, 4, 5]);
    // observable.subscribe(subject);

    // function addNumberSequence(number: number) {
    //   number = number + 1;
    //   number = number + 2;
    //   number = number + 3;
    //   number = number + 4;
    //   number = number + 5;
    //   return number;
    // }

    // function addNumberSequence(number: number) {
    //   for (let i = 1; i <= 5; i++) {
    //     number = number + i;
    //   }
    //   return number;
    // }


    // console.log(addNumberSequence(8));

    // const SUCCESS_MESS = 'Thành công';

    // console.log(SUCCESS_MESS, 'Bạn đã đăng nhập vào website');
    // console.log(SUCCESS_MESS, 'Bạn đã đặt hàng');



    // class ValidatePerson {
    //   constructor(private name: string, private age: number) {
    //     this.name = name;
    //     this.age = age;
    //   }

    //   ValidateName(name: string) {
    //     if (name.length > 3) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }

    //   ValidateAge(age: number) {
    //     if (age > 18) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }

    //   Display() {
    //     if (this.ValidateName(this.name) && this.ValidateAge(this.age)) {
    //       console.log(`Name: ${this.name} and Age: ${this.age}`);
    //     } else {
    //       console.log('Invalid');
    //     }
    //   }
    // }

    // class DisplayPerson {
    //   constructor(private name: string, private age: number, private validate: ValidatePerson) {
    //     this.name = name;
    //     this.age = age;
    //     this.validate = new ValidatePerson(this.name, this.age);
    //   }

    //   Display() {
    //     if (
    //       this.validate.ValidateName(this.name) &&
    //       this.validate.ValidateAge(this.age)
    //     ) {
    //       console.log(`Name: ${this.name} and Age: ${this.age}`);
    //     } else {
    //       console.log('Invalid');
    //     }
    //   }
    // }

    //


    // const iceCreamFlavors = ['chocolate', 'vanilla'];

    // class makeIceCream {
    //   constructor(private flavor: string) {
    //     this.flavor = flavor;
    //   }
    //   make() {
    //     if (iceCreamFlavors.indexOf(this.flavor) > -1) {
    //       console.log('Great success. You now have ice cream.');
    //     } else {
    //       console.log('Epic fail. No ice cream for you.');
    //     }
    //   }
    // }

    // class addIceCream {
    //   constructor(private flavor: string) {
    //     this.flavor = flavor;
    //   }
    //   add() {
    //     iceCreamFlavors.push(this.flavor);
    //   }
    // }

    // let addStrawberryFlavor = new addIceCream('strawberry');
    // addStrawberryFlavor.add();
    // let makeStrawberryFlavor = new makeIceCream('strawberry');
    // makeStrawberryFlavor.make();


    // class Shape {

    //   constructor(protected color: string = '') {

    //   }

    //   setColor(color: string) {
    //     this.color = color;
    //   }

    //   getColor() {
    //     return this.color;
    //   }
    // }

    // class Rectangle extends Shape {
    //   protected width: number = 0;
    //   protected height: number = 0;
    //   protected color: string = '';

    //   constructor(color: string = '') {
    //     super(color)
    //   }

    //   setWidth(width: number) {
    //     this.width = width;
    //   }

    //   setHeight(height: number) {
    //     this.height = height;
    //   }

    //   getArea() {
    //     return this.width * this.height;
    //   }
    // }

    // class Square extends Shape {
    //   protected side: number = 0;

    //   constructor(color: string = '') {
    //     super(color)
    //   }

    //   setSide(side: number) {
    //     this.side = side;
    //   }

    //   getArea() {
    //     return this.side * this.side;
    //   }
    // }

    // let rectangle = new Rectangle();
    // rectangle.setWidth(10);
    // rectangle.setHeight(5);
    // console.log(rectangle.getArea()); // 50


    // let square = new Square();
    // square.setWidth(10);
    // square.setHeight(5);
    // console.log(square.getArea()); // 25


    // interface IShape {
    //   calculateArea(): number;
    //   calculateVolume(): number;
    // }


    // class Square implements IShape {
    //   calculateArea() {

    //   }
    //   calculateVolume() {
    //     //...
    //   }
    // }

    // class Cuboid implements IShape {
    //   calculateArea() {
    //     //...
    //   }
    //   calculateVolume() {
    //     //...
    //   }
    // }

    // class Rectangle implements IShape {
    //   calculateArea() {
    //     //...
    //   }
    //   calculateVolume() {
    //     //...
    //   }
    // }

    interface IShape {
      calculateArea(): number;
    }

    interface IThreeDimensionalShape {
      calculateArea(): number;
      calculateVolume(): number;
    }



  }

}
