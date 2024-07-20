import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { TechComponent } from './tech/tech.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    TechComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  template: `<main>
    <section class="content">
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-tech></app-tech>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </section>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Portfolio';
}
