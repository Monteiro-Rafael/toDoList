import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';



@Component({
  selector: 'app-to-do-cards',
  templateUrl: './to-do-cards.component.html',
  styleUrls: ['./to-do-cards.component.css']
})
export class ToDoCardsComponent implements OnInit {

cards: Card[] = [
  new Card("","")
];


onAddCard(titulo, descricao){

  const newCard = new Card (titulo, descricao);

  this.cards.push(newCard);


  }

onRemoveCard(index){

  this.cards.splice(index, 1);
}

  constructor() { }

  ngOnInit(): void {
  }

}
