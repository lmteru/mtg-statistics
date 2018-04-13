import { DeckListService } from './../shared/deck-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decklist-input',
  templateUrl: './decklist-input.component.html',
  styleUrls: ['./decklist-input.component.css']
})
export class DecklistInputComponent implements OnInit {

  deckStr: string;
  arrayDeck: string[];
  commanderStr: string;

  constructor( private deckService: DeckListService ) { }

  ngOnInit() {
  }

  printDeck(){
    // quebra o texto inserido no campo em um array
    this.arrayDeck = this.deckStr.split('\n');

    //coloca o comandante na variavel de comandante
    this.deckService.$commanderStr = this.arrayDeck[1];

    //separa o comandante do resto do array e salva no serviço
    this.arrayDeck = this.arrayDeck.copyWithin(0, 2);
    this.deckService.$deckString = this.arrayDeck;

    //chama o metodo do servico que faz com que transforme o array de string em cartas
    this.deckService.consolidaComandante();
    this.deckService.consolidaLista();
  }

}
