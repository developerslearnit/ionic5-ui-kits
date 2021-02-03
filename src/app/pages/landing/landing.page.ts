import { AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { GestureController, IonFab } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements AfterViewInit  {
  @ViewChild(IonFab, { read: ElementRef }) slideButton: ElementRef;
  @ViewChild('slideBox', { read: ElementRef }) slideBox: ElementRef;
  constructor(private getstureCtrl: GestureController,private router: Router,
    private zone: NgZone) { }
  loginWrapWidth: number = 0;
  showSlideText:boolean =true;

  ngAfterViewInit(): void {
    this.createSlideGesture();
   }
 
   createSlideGesture() {
     const gesture = this.getstureCtrl.create({
       el: this.slideButton.nativeElement,
       gestureName: 'swipe to login',
       onStart: ev => {
         this.loginWrapWidth = -(this.slideBox.nativeElement.offsetWidth - (43 + 15));       
         
       },
       onMove: ev => {
 
         if (ev.deltaX > 0 || ev.deltaX == 0) {
           return false;
         }

         this.showSlideText =false;
         if (ev.deltaX < this.loginWrapWidth) {
           this.zone.run(() => {
             this.router.navigate(['/main']);
         });
           
         }else{
           this.slideButton.nativeElement.style.transform = `translateX(${ev.deltaX}px)`;
         }
 
       },
       onEnd: ev => {
 
       }
     });
 
     gesture.enable(true);
   }

}
