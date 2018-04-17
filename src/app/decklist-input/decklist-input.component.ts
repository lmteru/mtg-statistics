import { MagicCard, MagicDeck } from './../shared/MagicCard';
import { DeckListService } from './../shared/deck-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  comander: MagicCard;

  pct:number = 0;
  render: boolean = false;


  constructor( private deckService: DeckListService, private route: Router ) { }


  ngOnInit() {
    const k = setInterval( k => {
      this.pct = this.deckService.progressBar;
    }
    , 1 );
  }

  async printDeck(){
    if(this.deckStr!="" && this.deckStr!=' ')
    {
      this.render = true;
      // quebra o texto inserido no campo em um array
      this.arrayDeck = this.deckStr.split('\n');

      //salva no serviço a decklist
      this.deckService.deckString = this.arrayDeck;

      //chama o metodo do servico que faz com que transforme o array de string em array de cartas e comandante
      await this.deckService.consolidaLista();

      //atualiza a decklist e o comandante
      this.decklist = this.deckService.deckCard;
      this.comander = this.deckService.comanderCard;

      //vai para deckView quando acaba de carregar o deck
      this.route.navigate(['./deckView']);
    }
  }

}
