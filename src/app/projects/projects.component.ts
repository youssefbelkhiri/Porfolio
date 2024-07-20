import { Component } from '@angular/core';
import { PcardComponent } from '../pcard/pcard.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PcardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Recommendation System',
      description:
        'Recommendation system for product of amazon based on reviews of the costumers',
      image: 'recomm.png',
      link: 'https://github.com/youssefbelkhiri',
    },
    {
      title: 'Exam Generator',
      description:
        'website for generate exams for teachers and gradig papers of students ',
      image: 'recomm.png',
      link: 'https://github.com/youssefbelkhiri',
    },
    {
      title: 'Project 2',
      description:
        'lorem ipsum yau lakr kajkjja kaemm jaij m oj ojeo ifkeem, nkkf,lalz',
      image: 'recomm.png',
      link: 'https://github.com/youssefbelkhiri',
    },
  ];
}
