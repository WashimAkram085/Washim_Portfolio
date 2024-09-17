import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educationList = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'XYZ University',
      duration: '2015 - 2019',
      description: 'Focused on software engineering, algorithms, and data structures.'
    },
    {
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'ABC University',
      duration: '2019 - 2021',
      description: 'Specialized in machine learning, neural networks, and AI ethics.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
