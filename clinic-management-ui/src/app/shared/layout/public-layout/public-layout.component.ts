import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmCardImports } from '../../spartan-ui/card/src';

@Component({
  selector: 'app-public-layout',
  standalone:true,
  imports: [RouterOutlet, ...HlmCardImports],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent {

}
