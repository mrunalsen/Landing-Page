import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @HostBinding('class.navfixed')
  // navFixed: boolean = false;
  
  // @HostListener('window:scroll', ['$event']) 
  //   scrollHandler() {
  //     if(window.scrollY >=200){
  //       console.log('hello');
  //       this.navFixed = true
  //     }
  //     else{
  //       this.navFixed = false
  //     }
  //   }
  // (scroll)="scrollHandler()"
}
