import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq: Faq[] = [
    {
      question: 'Comment s\'inscrire aux ateliers?',
      response: `L'inscription au ateliers se fait lors de l'inscription à la retraite. Un formulaire est proposé avec les différents carrefours disponible en fonction de l'age.`
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Faq {
  question: string;
  response: string;
}
