import { Component } from '@angular/core';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css',
})
export class TechComponent {
  imgSrcs: string[] = [
    'icons8-javascript-48.png',
    'php.png',
    'C.png',
    'java.png',
    'python.png',
    'nestjs.png',
    'react.png',
    'tailwind.png',
    'prisma.png',
    'git.png',
    'icons8-github-50.png',
    'jupyter.png',
  ];
}
