import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {}
