import {Component, OnInit} from '@angular/core';
import {get} from 'scriptjs';

declare var $event: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jnjl-fe';
  menu: MenuItem[] = [
    {
      id: '#intro',
      title: 'Acceuil'
    },
    {
      id: '#about',
      title: 'Info'
    },
    {
      id: '#speakers',
      title: 'Orateurs'
    },
    {
      id: '#schedule',
      title: 'Programme'
    },
    {
      id: '#buy-tickets',
      title: 'Inscription',
      button: true
    }
  ];


  ngOnInit(): void {
    get('assets/js/main.js', () => console.log('js loaded'));
  }
}

interface MenuItem {
  id: string;
  title: string;
  button?: boolean;
}

export interface SocialNetwork {
  name: string;
  url: string;
  icon?: string;
}
