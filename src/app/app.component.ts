import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './main_components/sidebar/sidebar.component';
import { OnboardingComponent } from './features/onboarding/onboarding.component';
import { HeaderComponent } from './main_components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-claudio';
  
}
