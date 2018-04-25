import { MagicDeck } from './../shared/MagicCard';
import { Color } from 'ng2-charts';
import { DeckListService } from './../shared/deck-list.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tipo-carta',
  templateUrl: './tipo-carta.component.html',
  styleUrls: ['./tipo-carta.component.css']
})
export class TipoCartaComponent implements OnInit {

  constructor( ) { }
  // Radar
  public radarChartLabels: string[] = [
    'LANDS', 'CREATURES', 'ENCHANTMENTS', 'ARTIFACTS', 'PLANESWALKERS', 'SORCERIES', 'INSTANTS'
  ];

  @Input('deckList') deckList: MagicDeck[];

  public radarChartData: any = [{
    data: [0, 0, 0, 0, 0, 0, 0],
    label: 'Quantidade'
  }];

  public radarChartType: string = 'radar';

  public colors: Array<Color> = [
    {
      borderColor: 'rgba(0, 0, 0, 0)',
      backgroundColor: 'rgba(0, 0, 25, 0.3)',
      pointBackgroundColor: 'rgba(0, 0, 0, 1)'
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

    for (let i of this.deckList) {
      tipo = i.card.type.toLowerCase();
      if (tipo.toLowerCase().includes('land')) {
        this.radarChartData[0].data[0]++;
      }
      if (tipo.toLowerCase().includes('creature')) {
        this.radarChartData[0].data[1]++;
      }
      if (tipo.toLowerCase().includes('enchantment')) {
        this.radarChartData[0].data[2]++;
      }
      if (tipo.toLowerCase().includes('artifact')) {
        this.radarChartData[0].data[3]++;
      }
      if (tipo.toLowerCase().includes('planeswalker')) {
        this.radarChartData[0].data[4]++;
      }
      if (tipo.toLowerCase().includes('sorcer')) {
        this.radarChartData[0].data[5]++;
      }
      if (tipo.toLowerCase().includes('instant')) {
        this.radarChartData[0].data[6]++;
      }
    }//fim do for
  }

}
