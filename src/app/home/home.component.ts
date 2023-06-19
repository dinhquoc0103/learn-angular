import { Component, OnInit } from '@angular/core';
import { Observable, Observer, from, fromEvent, interval, of, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter: number = 0;
  rate: number = 3000;
  lastClick: number = Date.now() - this.rate;

  constructor() { }

  ngOnInit(): void {
  }

  handleIncreaseCounter(event: any) {

    // const observable = new Observable(function subscribe(subscriber) {
    //   const id = setInterval(() => {
    //     subscriber.next('hi');
    //   }, 1000);
    // });


    // const arr = [1, 2, 3, 4, 5];
    // const fromArrObservable = from(arr);

    // fromArrObservable.subscribe({
    //   next(value) {
    //     console.log(value);
    //   },
    // });




    // if ((Date.now() - this.lastClick) >= this.rate) {
    //   this.counter = this.counter + 1;
    //   this.lastClick = Date.now();
    // }
    // else {
    //   console.log('Wait 3s for next click');
    // }

    // const observale = new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next('234');
    //     observer.complete();
    //   }, 1000);
    // });

    // const subscription = observale.subscribe({
    //   next: (value) => {
    //     console.log(typeof value);
    //     console.log(typeof Number(value));
    //   },
    //   complete: () => console.log("complete")
    // });

    // subscription.unsubscribe();

    // console.log(subscription);



    // const sequence = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   subscriber.next(4);
    //   subscriber.next(5);
    //   subscriber.complete();
    // });

    // sequence.subscribe({
    //   next(num) {
    //     console.log(num);
    //   },
    //   complete() {
    //     console.log('Finished sequence');
    //   },
    // });

    // Disposing observable exxecution
    // let disposingTime = 0;
    // const stopTime = 6000;
    // const observable = new Observable((observer) => {
    //   let count = 0;

    //   const intervalId = setInterval(() => {
    //     disposingTime = disposingTime + 1000;

    //     observer.next(++count);

    //     // if (disposingTime === stopTime) {
    //     //   observer.complete();
    //     // }
    //   }, 1000);

    //   return () => {
    //     console.log('Luôn được gọi cuối cùng');

    //     clearInterval(intervalId);
    //   }
    // });

    // const subscription = observable.subscribe({
    //   next(count) {
    //     console.log(count);
    //   },
    //   complete() {
    //     console.log('Finished observable');
    //   },
    // });

    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, stopTime);


    // const newObservable = new Observable((observer) => {
    //   setInterval(() => {
    //     observer.next('Learn observable rxjs in Angular');
    //   }, 1000);
    // });

    // const childSubscription = newObservable.subscribe({
    //   next(value) {
    //     console.log(value);
    //   },
    // })

    // subscription.add(childSubscription);

    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, stopTime);



    // const observable = interval(1000);
    // const subscription = observable.subscribe(val => console.log(val));

    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 8000);

    // const observable1 = interval(1000);
    // const observable2 = interval(2000);
    // const subscription = observable1.subscribe(val => console.log('first:', val));
    // const childSubscription = observable2.subscribe(val => console.log('second:', val));

    // subscription.add(childSubscription);

    // setTimeout(() => {
    //   subscription.unsubscribe();
    // }, 8000);

    // const observable = new Observable<string>((subscriber) => {
    //   setInterval(() => {
    //     subscriber.next(8); // eps T type là string nhưng gửi dữ liệu từ observable vào observer là number chắc chắn lỗi.
    //   }, 1000);
    // });


  }

}
