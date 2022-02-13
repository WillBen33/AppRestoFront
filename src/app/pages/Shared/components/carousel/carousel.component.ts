import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {

  slides = [
    {'image': 'https://via.placeholder.com/300x200/0000FF'},
    {'image': 'https://via.placeholder.com/300x200/FFFFFF'},
    {'image': 'https://via.placeholder.com/300x200/008000'},
    {'image': 'https://via.placeholder.com/300x200/FF0000'}
  ];

  interval: number = 0;
  proportion: number = 0;

  constructor() {}

  ngOnInit(): void {}

}
