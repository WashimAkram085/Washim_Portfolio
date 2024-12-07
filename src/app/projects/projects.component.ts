import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'S I Electricals : E Commerce App',
      description: 'S I Electricals is a full-stack web application that allows users to browse, search, and purchase electricals product based on the category and place order on their convenient place. The application is built with Angular, Typescript,Springboot,Postman, PostgreSQL and features a responsive design, user authentication, and a shopping cart.',
      image: '../../assets/project-image/SIElectricals.png',
      link: 'https://github.com/WashimAkram085/S_I_Electricals_Frontend',
      tags: ['Angular', 'Typescript', 'HTML/CSS', 'SpringBoot', 'Postman', 'PostGreSQL', 'Render', 'Vercel']
    },
    {
      title: 'Swirm Bookstore App',
      description: 'Swirm Bookstore is a full-stack web application that allows users to browse, search, and purchase books. The application is built with Angular, Typescript,Springboot,Postman and features a responsive design, user authentication, and a shopping cart.',
      image: '../../assets/project-image/swirm-bookstore.png',
      link: 'https://github.com/WashimAkram085/swirm-bookstore-app',
      tags: ['Angular', 'Typescript', 'HTML/CSS', 'Postman', 'SpringBoot']
    },
    {
      title: 'Movie Finder App',
      description: 'The Movie Finder App is a web application that allows users to search for movies and view details such as the title, release yaer, and plot. The application is built with React , Vite , JavaScript, and CSS, and features a responsive design and user-friendly interface.',
      image: '../../assets/project-image/movie-finder.png',
      link: 'https://movie-finder-gules.vercel.app/',
      tags: ['React+Vite', 'JavaScript', 'CSS']
    },
    {
      title: 'Feed Forward App',
      description: 'It is food reduction website which helps to reduce food wastage by providing a platform for the manager of hostels to donate their leftover food to the needy people through NGO. In this web-app we mainly focused on to create a responsive and beautiful UI/UX design.',
      image: '../../assets/project-image/feed-forward.png',
      link: 'https://feed-forward-orpin.vercel.app/',
      tags: ['HTML', 'JavaScript', 'CSS']
    },
    {
      title: 'Employee  Data Management System',
      description: 'Employee Data Management System is a web application that allows admins to manage employee data. Also the user can view the same department employees. The application is built with Angular, Typescript, and features a responsive design, user authentication.',
      image: '../../assets/project-image/employee-management.png',
      link: 'https://employee-data-management-mauve.vercel.app/',
      tags: ['Angular', 'Typescript', 'HTML/CSS', 'Postman']
    },
    {
      title: 'Fundo-Notes App',
      description: 'Fundo-Notes is a web application that allows users to create, edit, and delete notes. The application is built with Angular, Typescript, and features a responsive design, user authentication.',
      image: '../../assets/project-image/fundoNotes.png',
      link: 'https://fundo-notes.vercel.app/',
      tags: ['Angular', 'Typescript', 'HTML/CSS', 'Postman']
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'Tic Tac Toe is a classic two-player game where players take turns marking spaces in a 3x3 grid. The first player to get three of their marks in a row wins the game. The game is built with HTML, CSS, and JavaScript, and features a responsive design and user-friendly interface.',
      image: '../../assets/project-image/tic-tac-toe.png',
      link: 'https://tic-tac-toe-game-rouge-sigma.vercel.app/',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Rock Paper Scissors Game',
      description: 'Rock Paper Scissors is a simple hand game that is played between two people. Each player simultaneously forms one of three shapes with an outstretched hand. The game is built with HTML, CSS, and JavaScript, and features a responsive design and user-friendly interface.',
      image: '../../assets/project-image/rock-paper.png',
      link: 'https://rock-paper-scissors-gamewashim45-washimakram085s-projects.vercel.app/',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'iCoder Blog Website',
      description: 'It is a blog website made for learning purpose. It is a responsive website with a beautiful UI/UX design. It is made using Bootstrap mainly.',
      image: '../../assets/project-image/icoder.png',
      link: 'https://icoder-2014085-washimakram085s-projects.vercel.app/',
      tags: ['HTML', 'CSS', 'Bootstrap']
    },
    {
      title: 'Daily Quote Generator App',
      description: 'Daily Quote Generator is a web application that displays a new quote on every time the user clicks on the "New Quote" button and also allows the user to tweet the quote. The application is built with HTML, CSS, and JavaScript, and features a responsive design and user-friendly interface.',
      image: '../../assets/project-image/quote.png',
      link: 'https://daily-quote-generator-wheat.vercel.app/',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Prediction of CVD through Retinal fundus image using Deepl Learning',
      description: 'Prediction of CVD through medical image processing of Retinal fundus image using Deep learning Algorithm and AI. Three CNN architectures were implemented in this project- Inception V3, RESNET-50, VGG-19. Using these 3 models we have implemented an ensembled model.',
      image: '../../assets/project-image/cvd.png',
      link: 'https://github.com/WashimAkram085/Prediction-of-Cardiovascular-Risk-Factors-from-retinal-fundus-images-using-DL',
      tags: ['Python', 'Deep Learning', 'AI']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
