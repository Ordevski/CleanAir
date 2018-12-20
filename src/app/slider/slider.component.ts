import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  isCollapsed : boolean = true;
  
  isCollapsed1 : boolean = true;
  
  isCollapsed2 : boolean = true;

  constructor() { }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  toggleCollapse1(){
    this.isCollapsed1   = !this.isCollapsed1;
  }
  toggleCollapse2(){
    this.isCollapsed2 = !this.isCollapsed2;
  }
  ngOnInit() {
  }

imageUrls  = [
  'http://admin.balkaneu.com/wp-content/uploads/2017/12/ndotja.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJFoTNLnYK3c1MA7RhKi0uk7qagm0Wn-bUntf-8ObbDewsn3WSQ'
]

}
