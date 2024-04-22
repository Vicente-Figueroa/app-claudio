import { urlJoin } from '@angular-devkit/build-angular/src/utils';
import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

interface Slide {
  img: string;
  title: string;
  description: string;
  link: string; // Added link property for image
}

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
];
slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,
 "lazyLoad": true,
 "infinite": true,

};



 
}
