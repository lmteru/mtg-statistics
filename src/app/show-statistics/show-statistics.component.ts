import { StatisticsService } from './../shared/statistics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-statistics',
  templateUrl: './show-statistics.component.html',
  styleUrls: ['./show-statistics.component.css']
})
export class ShowStatisticsComponent implements OnInit {

  constructor( private statistics: StatisticsService ) { }

  cmcTotal: number;
  cmcMedio: number;
  total:number;

  ngOnInit() {
    this.cmcTotal = this.statistics.cmcTotal();
    this.cmcMedio = this.statistics.cmcMedio();
    this.total = this.statistics.totalCards();
  }

}
