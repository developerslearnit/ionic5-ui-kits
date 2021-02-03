import { Component, OnInit, ViewChild } from '@angular/core';

import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-walktru-one',
  templateUrl: './walktru-one.page.html',
  styleUrls: ['./walktru-one.page.scss'],
})


export class WalktruOnePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  isLastSlide: boolean = false;
  slideOpts = {
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };
  constructor() { }

  ngOnInit() {
  }

  next(){
    this.slides.slideNext();
  }

  slideChanged() {
    console.log("Changed");
    // this.slides.getActiveIndex().then((val)=>{
    //   this.indx =val;
    // });

    this.slides.isEnd().then((isLast) => {
      if(isLast){
        console.log("Is Last Slide");
        this.isLastSlide = true;
      }else{
        this.isLastSlide=false;
      }
      
    });

  }

}
