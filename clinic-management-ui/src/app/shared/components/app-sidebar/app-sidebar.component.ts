import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SidebarLink {
  readonly label: string;
  readonly route: string;
  readonly icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-sidebar.component.html',
  styleUrl: './app-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSidebarComponent {
  @Input() collapsed = false;

  readonly primaryLinks: readonly SidebarLink[] = [
    { label: 'Dashboard', route: '/', icon: '⌂' },
    { label: 'Doctors', route: '/doctors', icon: '+' },
    { label: 'Patients', route: '/patients', icon: '◉' },
  ];

  readonly secondaryLinks: readonly SidebarLink[] = [
    { label: 'Administration', route: '/super-admin', icon: '⚙' },
  ];
}