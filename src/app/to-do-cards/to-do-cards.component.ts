import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';



@Component({
  selector: 'app-to-do-cards',
  templateUrl: './to-do-cards.component.html',
  styleUrls: ['./to-do-cards.component.css']
})
export class ToDoCardsComponent implements OnInit {

cards: Card[] = [
  new Card("teste","asdfasdf")
];


adicionarCard(titulo, descricao){

  const newCard = new Card (titulo, descricao);

  this.cards.push(newCard);


}

removerCard(index){

  this.cards.splice(index, 1);

}

  constructor() { }



  ngOnInit(): void {
  //   this.cards = [{
  //     titulo: "asdfoisdf",
  //     descricao: "aoshdasoidigas"
  //   }
  // ]
  }

}
