import { urlJoin } from '@angular-devkit/build-angular/src/utils';
import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent { slides = [
  {img: "../../../assets/portfolio/proyecto_1.jpg" },
  {img: "../../../assets/portfolio/proyecto_2.jpg"},
  {img: "../../../assets/portfolio/proyecto_3.jpg"},
  {img: "../../../assets/portfolio/proyecto_4.jpg"},
  {img: "../../../assets/portfolio/proyecto_5.jpeg"},
];
slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,
 "lazyLoad": true,
 "infinite": true,

};



 
}
