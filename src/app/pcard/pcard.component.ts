import { Component, Input } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-pcard',
  standalone: true,
  imports: [TruncatePipe],
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
