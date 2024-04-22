import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './main_components/sidebar/sidebar.component';
import { HeaderComponent } from './main_components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-claudio';
  sidebarComponent = new SidebarComponent()

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target : any) {
    if (!target.closest('.sidebar') && !this.isSidebarElement(target)) {
      // Si se hace clic afuera del sidebar, ciérrelo
      this.sidebarComponent.toggleSidebar();
    }
  }

  isSidebarElement(element: any) {
    return element.classList.contains('sidebar');
  }
  ngOnInit() {
    // ... other initialization logic
  }
}
