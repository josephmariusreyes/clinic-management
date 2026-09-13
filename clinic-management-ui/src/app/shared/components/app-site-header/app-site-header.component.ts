import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './app-site-header.component.html',
  styleUrl: './app-site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSiteHeaderComponent {
  @Output() readonly menuToggle = new EventEmitter<void>();
}