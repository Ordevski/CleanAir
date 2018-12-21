import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public sliderImages;
  public isCollapsed;
  public isCollapsed1;
  public isCollapsed2;

  constructor() { }
  toggleCollapse() {
    this.isCollapsed = (!this.isCollapsed);
  }
  toggleCollapse1() {
    this.isCollapsed1   = (!this.isCollapsed1);
  }
  toggleCollapse2() {
    this.isCollapsed2 = (!this.isCollapsed2);
  }

  ngOnInit() {
    this.isCollapsed =  true;
    this.isCollapsed1 = true;
    this.isCollapsed2 = true;
    this.sliderImages = [
      'http://admin.balkaneu.com/wp-content/uploads/2017/12/ndotja.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJFoTNLnYK3c1MA7RhKi0uk7qagm0Wn-bUntf-8ObbDewsn3WSQ'
    ];
  }



}
