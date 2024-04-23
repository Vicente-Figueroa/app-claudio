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
  { img: "../../../assets/portfolio/proyecto_1.jpg", link: "proyectos/academia", title: "Academia de deep learning Bns Aires" },
  { img: "../../../assets/portfolio/proyecto_2.jpg", link: "proyectos/rubitsworks", title: "Plataforma de servicios Freelance" },
  { img: "../../../assets/portfolio/proyecto_3.jpg", link: "proyectos/cymasuite", title: "Sistema de Gestión Contable moderno" },
  { img: "../../../assets/portfolio/proyecto_4.jpg", link: "proyectos/defontana", title: "Premio nominacion Defontana" },
  { img: "../../../assets/portfolio/proyecto_5.jpeg", link: "proyectos/personal", title: "Proyectos personales" }
];
slideConfig = {"slidesToShow": 1, "slidesToScroll": 1,
 "lazyLoad": true,
 "infinite": true,
 "autoplay":true,
 "autoplayspeed":3000,

};



 
}
