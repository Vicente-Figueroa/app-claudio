import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
previousScrollTop = 0; // Track previous scroll position
previousTouchY = 0; // Track previous touch position

constructor(private router: Router) {}

ngAfterViewInit() {
  this.scrollContainer.nativeElement.addEventListener(
    'touchmove',
    (event: TouchEvent) => {
      const target = event.target as HTMLElement;
      const currentTouchY = event.touches[0].clientY; // Get Y-coordinate of first touch
      const touchThreshold = -80; // Adjust this value for touch sensitivity
      console.log(currentTouchY - this.previousTouchY);
      if (currentTouchY - this.previousTouchY < touchThreshold) {
        this.router.navigate(['portafolio']);
      }

      this.previousTouchY = currentTouchY; // Update previous touch position
    }
  );
}
}
