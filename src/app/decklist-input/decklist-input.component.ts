import { MagicCard, MagicDeck } from './../shared/MagicCard';
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
  decklist: MagicDeck[];


  constructor( private deckService: DeckListService ) { }


  ngOnInit() {
    const k = setInterval( k => {
      this.decklist = this.deckService.deckCard;
    }
    , 1 );
  }

  printDeck(){
    // quebra o texto inserido no campo em um array
    this.arrayDeck = this.deckStr.split('\n');

    //separa o comandante do resto do array e salva no serviço
    this.deckService.deckString = this.arrayDeck;

    //chama o metodo do servico que faz com que transforme o array de string em cartas
    this.deckService.consolidaLista();
  }

}
