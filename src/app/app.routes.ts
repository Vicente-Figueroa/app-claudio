import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './features/aboutme/aboutme.component';
import { OnboardingComponent } from './features/onboarding/onboarding.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  { path: 'sobre_mi', component: AboutmeComponent },
  { path: 'portafolio', component: PortfolioComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', component: OnboardingComponent }


];
