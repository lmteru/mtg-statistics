import { DeckListService } from './../shared/deck-list.service';
import { RadarGraph } from './../shared/RadarGraph';
import { Component, OnInit, Input } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-radial-graph',
  templateUrl: './radial-graph.component.html',
  styleUrls: ['./radial-graph.component.css']
})
export class RadialGraphComponent implements OnInit {

  // Radar
  // public radarChartLabels: string[] = ["BRANCO", 'AZUL', 'PRETO', 'VERMELHO', 'VERDE'];

  // public radarChartData:any[] = [
  //   {data: [0, 0, 0, 0, 0], label: 'Series A'}
  // ];

  // public radarChartType: string = 'radar';

  public polarAreaChartLabels: string[] = ['BRANCO', 'AZUL', 'PRETO', 'VERMELHO', 'VERDE'];
  public polarAreaChartData: Array<number>[] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];//array de array para poder fazer com que cada cor seja uma camada renderizada dseparado

  public polarAreaLegend: boolean = false;

  public polarAreaChartType: string = 'polarArea';

  public ChartColors: Color[] = [ //'#ffff66','#0033cc','#000000','#ff0000','#00cc00'
    { backgroundColor: '#ffff66' },
    { backgroundColor: '#0033cc' },
    { backgroundColor: '#000000' },
    { backgroundColor: '#ff0000' },
    { backgroundColor: '#00cc00' }
  ];

  constructor(public deckService: DeckListService) { }

  ngOnInit() {
    let auxArray: string[];



    for (let i of this.deckService.deckCard) {
      console.log(i);
      try {
        if (!i.card.type.includes('Land')) {
          auxArray = i.card.manaCost.split('');
          for (let j of auxArray) {
            if (j == "W") {//se branco
              this.polarAreaChartData[0][0]++;
            } else if (j == "U") {//se azul
              this.polarAreaChartData[1][1]++;
            } else if (j == "B") {//se preto
              this.polarAreaChartData[2][2]++;
            } else if (j == "R") {//se vermelho
              this.polarAreaChartData[3][3]++;
            } else if (j == "G") {//se verde
              this.polarAreaChartData[4][4]++;
            }

          }//fim do for de string
        }//fim do if land



      } catch (Exception) {
        console.log("Deu erro");
      }
    }//fim do for de cartas
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
