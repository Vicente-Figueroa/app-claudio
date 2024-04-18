import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './features/aboutme/aboutme.component';
import { OnboardingComponent } from './features/onboarding/onboarding.component';

export const routes: Routes = [
  { path: 'sobre_mi', component: AboutmeComponent },
  { path: '**', component: OnboardingComponent }
];
