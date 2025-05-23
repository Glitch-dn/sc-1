import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { Card } from './models/card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'sc-1';

  cards: Card[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Card[]>('assets/transactions.json').subscribe(
      data => {
        console.log('Dati ricevuti:', data);
        this.cards = data;
      },
      error => {
        console.error('Errore caricamento JSON:', error);
      }
    );
  }
}