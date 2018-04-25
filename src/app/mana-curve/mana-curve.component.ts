import { MagicDeck } from './../shared/MagicCard';
import { DeckListService } from './../shared/deck-list.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mana-curve',
  templateUrl: './mana-curve.component.html',
  styleUrls: ['./mana-curve.component.css']
})
export class ManaCurveComponent implements OnInit {

  constructor( ) { }

  @Input('deckList') deckList: MagicDeck[];
  
  cmcArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  ngOnInit() {
    for ( let i of  this.deckList) {
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
  public lineChartLabels:Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // cor de fundo do quadrado
      backgroundColor: 'rgba(0, 0, 25, 0.75)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'bar';

  // events
  public chartClicked(e:any):void {
    // console.log(e);
  }

  public chartHovered(e:any):void {
    // console.log(e);
  }

}
