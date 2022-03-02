import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonSlides, {static: true})  slides: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  swipeNext(){
    this.slides.lockSwipeToNext(false);
    this.slides.slideNext();
  }

  swipePrevious(){
    this.slides.lockSwipeToPrev(false);
    this.slides.slidePrev();
  }

}
