import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-socialcard',
  standalone: true,
  imports: [],
  templateUrl: './socialcard.component.html',
  styleUrl: './socialcard.component.css'
})
export class SocialcardComponent {
  @Input() src :string = "";
  @Input() name :string = "";
  @Input() link :string = "";
}
