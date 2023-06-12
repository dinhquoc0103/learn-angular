import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild(HomeComponent, { static: true }) homeComp!: HomeComponent;
  // @ViewChild('#homeComp') homeComp!: HomeComponent;
  // @ViewChild('increaseBtn', { static: true }) increaseBtn!: ElementRef<HTMLButtonElement>;

  @ViewChildren("homeComp") homeComp!: QueryList<HomeComponent>;

  ngOnInit() {
    // console.log('onInit:', this.homeComp);
    // console.log('onInit:', this.increaseBtn.nativeElement);
  }

  ngAfterViewInit() {
    // console.log('afterViewInit:', this.homeComp);
    // console.log('onInit:', this.increaseBtn.nativeElement);
    // console.log(this.homeComp.first);

    this.homeComp.forEach(element => {
      console.log(element);

    });

  }
}



