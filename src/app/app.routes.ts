import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './features/aboutme/aboutme.component';
import { OnboardingComponent } from './features/onboarding/onboarding.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';

export const routes: Routes = [
  { path: 'sobre_mi', component: AboutmeComponent },
  { path: 'portafolio', component: PortfolioComponent },
  { path: '**', component: OnboardingComponent }


];
