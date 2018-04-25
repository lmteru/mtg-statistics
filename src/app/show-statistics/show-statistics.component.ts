import { MagicDeck } from './../shared/MagicCard';
import { DeckListService } from './../shared/deck-list.service';
import { StatisticsService } from './../shared/statistics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-statistics',
  templateUrl: './show-statistics.component.html',
  styleUrls: ['./show-statistics.component.css']
})
export class ShowStatisticsComponent implements OnInit {

  constructor( private statistics: StatisticsService, private deckList: DeckListService ) { }

  cmcTotal: number;
  cmcMedio: number;
  total:number;
  show: MagicDeck[];
  cmdColor: string;

  ngOnInit() {
    this.cmcTotal = this.statistics.cmcTotal();
    this.cmcMedio = this.statistics.cmcMedio();
    this.total = this.statistics.totalCards();
    this.show = this.deckList.deckCard;
    this.cmdColor = this.deckList.colorId;
  }
}
