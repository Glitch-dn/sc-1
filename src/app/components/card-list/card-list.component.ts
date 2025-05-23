import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-list',
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input()
  cards : Card[] = [];

}
