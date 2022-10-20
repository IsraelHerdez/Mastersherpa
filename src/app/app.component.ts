import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

    datosMenu=[{
      
      'titulo':'Home',
      'icon':'fas fa-home',
      'url':'https://www.google.com/',},

      {
      'titulo':'Gantt',
      'icon':'fas fa-stream',
      'url':'home-page',
      

    },
    {
      
      'titulo':'Lista',
      'icon':'fas fa-list',
      'url':'https://www.google.com/',},

      {
      
        'titulo':'Calendario',
        'icon':'fas fa-calendar',
        'url':'https://www.google.com/',},

        
  
  ];
  }
