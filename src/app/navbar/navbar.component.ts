import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  imgSrcGithub: string = 'icons8-github-50.png';
  imgSrcLinkedIn: string = 'icons8-linkedin-48.png';
}
