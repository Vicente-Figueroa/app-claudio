import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './features/aboutme/aboutme.component';
import { OnboardingComponent } from './features/onboarding/onboarding.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ContactComponent } from './features/contact/contact.component';
import { AcademiaComponent } from './features/projects/academia/academia.component';
import { RubitsworksComponent } from './features/projects/rubitsworks/rubitsworks.component';
import { CymasuiteComponent } from './features/projects/cymasuite/cymasuite.component';

export const routes: Routes = [
  { path: 'sobre_mi', component: AboutmeComponent },
  { path: 'portafolio', component: PortfolioComponent },
  { path: 'proyectos/academia', component: AcademiaComponent },
  { path: 'proyectos/rubitsworks', component: RubitsworksComponent },
  { path: 'proyectos/cymasuite', component: CymasuiteComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', component: OnboardingComponent }


];
