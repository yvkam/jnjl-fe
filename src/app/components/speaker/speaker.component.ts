import {Component, OnInit} from '@angular/core';
import {SocialNetwork} from '../../app.component';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {

  speakers: Speaker[] = [
    {
      title: 'Pasteur',
      firstName: 'Jean-Paul',
      lastName: 'Kambaji',
      description: 'Pasteur de la Nouvelle Jerusalem de Huy',
      socialNetwork: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/NJLiege/'
        },
        {
          name: 'instagram',
          url: 'https://www.facebook.com/NJLiege/'
        },
        {
          name: 'youtube',
          url: 'https://www.facebook.com/NJLiege/',
          icon: 'youtube-square'
        }]
    },
    {
      firstName: 'Blaise',
      lastName: 'Biajila',
      socialNetwork: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/NJLiege/'
        },
        {
          name: 'instagram',
          url: 'https://www.facebook.com/NJLiege/'
        },
        {
          name: 'youtube',
          url: 'https://www.facebook.com/NJLiege/',
          icon: 'youtube-square'
        }]
    },
    {
      firstName: 'Pathy',
      lastName: 'Ilunga',
      socialNetwork: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/NJLiege/'
        },
        {
          name: 'instagram',
          url: 'https://www.facebook.com/NJLiege/'
        },
        {
          name: 'youtube',
          url: 'https://www.facebook.com/NJLiege/',
          icon: 'youtube-square'
        }]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

interface Speaker {
  title?: string;
  firstName: string;
  lastName: string;
  description?: string;
  socialNetwork?: SocialNetwork[];
}
