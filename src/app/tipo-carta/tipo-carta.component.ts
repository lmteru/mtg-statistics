import { Color } from 'ng2-charts';
import { DeckListService } from './../shared/deck-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-carta',
  templateUrl: './tipo-carta.component.html',
  styleUrls: ['./tipo-carta.component.css']
})
export class TipoCartaComponent implements OnInit {

  constructor(private decklist: DeckListService) { }
  // Radar
  public radarChartLabels: string[] = [
    'LANDS', 'CREATURES', 'ENCHANTMENTS', 'ARTIFACTS', 'PLANESWALKERS', 'SORCERIES', 'INSTANTS'
  ];

  public radarChartData: any = [{
    data: [0, 0, 0, 0, 0, 0, 0],
    label: 'Series A'
  }];

  public radarChartType: string = 'radar';

  public colors: Array<any> = [
    {
      borderColor: 'rgba(76, 76, 76, 1)',
      backgroundColor: 'rgba(0, 0, 25, 0.75)'
    }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
    let auxString: string[];
    let tipo: string;
    for (let i of this.decklist.deckCard) {
      tipo = i.card.type.toLowerCase();
      if (tipo.includes('land')) {
        this.radarChartData[0].data[0]++;
      }
      if (tipo.includes('creature')) {
        this.radarChartData[0].data[1]++;
      }
      if (tipo.includes('enchantment')) {
        this.radarChartData[0].data[2]++;
      }
      if (tipo.includes('artifact')) {
        this.radarChartData[0].data[3]++;
      }
      if (tipo.includes('planeswalker')) {
        this.radarChartData[0].data[4]++;
      }
      if (tipo.includes('sorcer')) {
        this.radarChartData[0].data[5]++;
      }
      if (tipo.includes('instant')) {
        this.radarChartData[0].data[6]++;
      }
    }//fim do for
  }

}
