import { DeckListService } from './deck-list.service';
import { Injectable } from '@angular/core';

@Injectable()
export class StatisticsService {

  constructor( private deckService: DeckListService ) { }

  public cmcTotal(): number{
    let total: number = 0;

    for(let i of this.deckService.deckCard){
      total += i.card.cmc;
    }

    return total;
  }

  public cmcMedio(): number{
    return this.cmcTotal() / 99;
  }

}
