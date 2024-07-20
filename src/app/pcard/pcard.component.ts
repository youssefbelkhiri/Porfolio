import { Component, Input } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-pcard',
  standalone: true,
  imports: [],
  templateUrl: './pcard.component.html',
  styleUrl: './pcard.component.css',
})
export class PcardComponent {
  @Input() project: Project = {
    title: 'string',
    description: 'string',
    image: 'string',
    link: 'string',
  };
}
