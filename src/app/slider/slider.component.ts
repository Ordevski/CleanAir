import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

imageUrls  = [
  'http://admin.balkaneu.com/wp-content/uploads/2017/12/ndotja.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJFoTNLnYK3c1MA7RhKi0uk7qagm0Wn-bUntf-8ObbDewsn3WSQ'
]

}
