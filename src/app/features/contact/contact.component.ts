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
  constructor() {}
}
