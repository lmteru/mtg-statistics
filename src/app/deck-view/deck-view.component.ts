import { DeckListService } from './../shared/deck-list.service';
import { MagicCard, MagicDeck } from './../shared/MagicCard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck-view',
  templateUrl: './deck-view.component.html',
  styleUrls: ['./deck-view.component.css']
})
export class DeckViewComponent implements OnInit {

  comander: MagicCard;
  decklist: MagicDeck[];

  constructor( private deckService: DeckListService ) { }

  ngOnInit() {
    this.comander = this.deckService.comanderCard;
    this.decklist = this.deckService.deckCard
  }

}
