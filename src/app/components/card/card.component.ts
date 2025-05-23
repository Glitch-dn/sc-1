import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe, DatePipe, NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() 
  card?: Card;
}
