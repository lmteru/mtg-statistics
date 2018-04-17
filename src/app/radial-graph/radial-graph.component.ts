import { DeckListService } from './../shared/deck-list.service';
import { RadarGraph } from './../shared/RadarGraph';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radial-graph',
  templateUrl: './radial-graph.component.html',
  styleUrls: ['./radial-graph.component.css']
})
export class RadialGraphComponent implements OnInit {

  // Radar
  public radarChartLabels: string[] = ["BRANCO", 'AZUL', 'PRETO', 'VERMELHO', 'VERDE'];

  public radarChartData:any[] = [
    {data: [0, 0, 0, 0, 0], label: 'Series A'}
  ];

  public radarChartType: string = 'radar';

  constructor(public deckService: DeckListService) { }

  ngOnInit() {
    let auxArray: string[];

    for (let i of this.deckService.deckCard) {
      console.log(i);
      try
      {if (!i.card.type.includes('Land')) {
        auxArray = i.card.manaCost.split('');
        for (let j of auxArray) {
          if (j == "W") {//se branco
            this.radarChartData[0].data[0]++;
          } else if (j == "U") {//se azul
            this.radarChartData[0].data[1]++;
          } else if (j == "B") {//se preto
            this.radarChartData[0].data[2]++;
          } else if (j == "R") {//se vermelho
            this.radarChartData[0].data[3]++;
          } else if (j == "G") {//se verde
            this.radarChartData[0].data[4]++;
          }

        }//fim do for de string
      }//fim do if land
    }catch(Exception){
      console.log("Deu erro");
    }
    }//fim do for de cartas
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


}
