import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebarComponent } from '../../components/app-sidebar/app-sidebar.component';
import { AppSiteHeaderComponent } from '../../components/app-site-header/app-site-header.component';

@Component({
  selector: 'app-app-main-layout',
  standalone: true,
  imports: [AppSidebarComponent, AppSiteHeaderComponent, RouterOutlet],
  templateUrl: './app-main-layout.component.html',
  styleUrl: './app-main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppMainLayoutComponent {
  sidebarCollapsed = false;

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
