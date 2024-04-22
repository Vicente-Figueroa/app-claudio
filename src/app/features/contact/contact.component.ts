import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SocialcardComponent } from './socialcard/socialcard.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialcardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  previousScrollTop = 0; // Track previous scroll position
  previousTouchY = 0; // Track previous touch position

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.scrollContainer.nativeElement.addEventListener(
      'scroll',
      (event: Event) => {
        const target = event.target as HTMLElement;
        const currentScrollTop = target.scrollTop;
        const scrollThreshold = 10; // Adjust this value to control sensitivity

        // Check for downward scrolling
        if (currentScrollTop > this.previousScrollTop) {
          console.log('Scrolling down!');

          const scrollPosition = currentScrollTop + target.offsetHeight;
          const scrollHeight = target.scrollHeight;

          if (scrollPosition >= scrollHeight) {
            console.log('Reached bottom, navigating to sobre_mi');
            this.router.navigate(['inicio']);
          }
        } else {
          console.log('Scrolling up or staying still');
        }

        this.previousScrollTop = currentScrollTop; // Update previous position
      }
    );

    this.scrollContainer.nativeElement.addEventListener(
      'touchmove',
      (event: TouchEvent) => {
        const target = event.target as HTMLElement;
        const currentTouchY = event.touches[0].clientY; // Get Y-coordinate of first touch
        const touchThreshold = -80; // Adjust this value for touch sensitivity
        console.log(currentTouchY - this.previousTouchY);
        if (currentTouchY - this.previousTouchY < touchThreshold) {
          console.log('theshjashjash!');
          this.router.navigate(['inicio']);

          // Check for downward scrolling on touch move
          if (currentTouchY > this.previousTouchY) {
            const scrollPosition = target.scrollTop + target.offsetHeight;
            const scrollHeight = target.scrollHeight;

            if (scrollPosition >= scrollHeight) {
              console.log('Reached bottom on mobile, navigating to sobre_mi');
              this.router.navigate(['inicio']);
            }
          } else {
            console.log('Scrolling up or staying still on mobile');
          }
        }

        this.previousTouchY = currentTouchY; // Update previous touch position
      }
    );
  }
}
