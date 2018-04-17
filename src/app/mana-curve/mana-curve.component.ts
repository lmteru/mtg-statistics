import { DeckListService } from './../shared/deck-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mana-curve',
  templateUrl: './mana-curve.component.html',
  styleUrls: ['./mana-curve.component.css']
})
export class ManaCurveComponent implements OnInit {

  constructor( private decklist: DeckListService ) { }

  cmcArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  ngOnInit() {
    for ( let i of this.decklist.deckCard ) {
      if( !i.card.type.includes("Land") ){
        if(i.card.cmc <= 10){
          this.cmcArray[i.card.cmc]++;
        }else{
          this.cmcArray[10]++;
        }
      }
    }
  }


  public lineChartData:Array<any> = [
    {data: this.cmcArray, label: 'Quantidade'}
  ];
  public lineChartLabels:Array<any> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // cor de fundo do quadrado
      backgroundColor: '#c2d6d6',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: ' #ff6666',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: ' #3333cc',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'bar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
