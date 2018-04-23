import { Color } from 'ng2-charts';
import { DeckListService } from './../../shared/deck-list.service';
import { Http } from '@angular/http';
import { MagicDeck, MagicCard } from './../../shared/MagicCard';
import { Component, OnInit } from '@angular/core';
import { getPluralCategory } from '@angular/common/src/i18n/localization';

@Component({
  selector: 'app-lands',
  templateUrl: './lands.component.html',
  styleUrls: ['./lands.component.css']
})
export class LandsComponent implements OnInit {

  constructor( private http: Http, private deckList: DeckListService ) { }

  txtOut: string = '';
  landsIn: string = '';
  k = false;

  pct: number = 0;
  size: number = 0;
  acc: number = 0;

  public ChartColors: Color[] = [
    { backgroundColor: '#ffff66' },
    { backgroundColor: '#0033cc' },
    { backgroundColor: '#000000' },
    { backgroundColor: '#ff0000' },
    { backgroundColor: '#00cc00' }
  ];

  // Doughnut
  public doughnutChartLabels:string[] = ['White', 'Blue', 'Black', 'Red', 'Green', 'Colorless'];
  public doughnutChartData:number[] = [];
  public doughnutChartType:string = 'doughnut';

  async ngOnInit() {
    this.Rodada();
   }

  async BuscaLandsRnd( ): Promise<MagicCard[]> {
    let toReturn: MagicCard[];
    let qntd: number;

    let pg: number = Math.floor(Math.random() * 20);

    const found = await this.http.get('https://api.magicthegathering.io/v1/cards?types=Land&page=' + pg).toPromise();

    toReturn = found.json().cards as MagicCard[];

    return toReturn;
  }

  private async BuscaLand( toSearch: string ): Promise<MagicCard> {
    let toReturn: MagicCard;
    let qntd: number;
    let aux: string [] = toSearch.split(' ');

    aux = aux.slice(1);
    toSearch = aux.join(' ');

    let found = await this.http.get('https://api.magicthegathering.io/v1/cards?name=' + toSearch).toPromise();

    toReturn = found.json().cards[0];

    return toReturn;
  }

  private toRelevantText( originalText: string ): string{

    let auxString: string;
    let asw: string[] = [];
    let aswOut: string;

    //faz com que somente a parte do texto que é relativa a geração de mana seja separada
    while(originalText.includes('Add') && originalText.includes('to your mana pool')) {

      auxString = originalText.slice( originalText.toLowerCase().indexOf('add') );
      auxString = auxString.slice( 0 , auxString.toLowerCase().indexOf('.') + 1 );

      originalText = originalText.slice( originalText.indexOf( auxString ) + auxString.length );
      //so da push se tiver um texto maior que dois para evitar adicionar entradas que nao gerem mana nenhuma
      if(auxString.length>2)
        asw.push(auxString);
    }

    for(let i in asw){
      let acumulador: string = '';
      //se produz mana de qualquer cor
      if( asw[i].toLowerCase().includes('any color') ) {
        aswOut='any';
      } else {
        //se produz mana de alguma cor aceitando mais de uma cor de cada vez
        if( asw[i].toLowerCase().includes('{g}') ) {
          acumulador+='G';
        }
        if( asw[i].toLowerCase().includes('{r}') ) {
          acumulador+='R';
        }
        if( asw[i].toLowerCase().includes('{w}') ) {
          acumulador+='W';
        }
        if( asw[i].toLowerCase().includes('{u}') ) {
          acumulador+='U';
        }
        if( asw[i].toLowerCase().includes('{b}') ) {
          acumulador+='B';
        }
        //caso nao produza mana de nenhuma cor
        if( asw[i].toLowerCase().includes('{c}') && acumulador.length <= 0 ) {
          acumulador='C';
        }
        console.log("acumulador");
        console.log(acumulador);
        aswOut=acumulador.toLowerCase();
        acumulador='';
      }
    }
    return( aswOut );
  }

  private async Rodada(){

    let textos: string;
    let landsDaRodada: MagicDeck[] = [];
    let landAux: string[];
    this.k=!this.k;


    let symbolCount: number[] = [ 0, 0, 0, 0, 0, 0 ];

    landsDaRodada = this.deckList.deckLands;

    for(let i of landsDaRodada) {
      if(!i.card.type.toLowerCase().includes('basic') ) {
        textos = this.toRelevantText(i.card.text);
        console.log(i.card.name);
        console.log('textos');
        console.log(textos);

        if(textos != undefined) {
          if(textos.includes('w')){
            symbolCount[0]+=i.qntd;
          }
          if(textos.includes('u')){
            symbolCount[1]+=i.qntd;
          }
          if(textos.includes('b')){
            symbolCount[2]+=i.qntd;
          }
          if(textos.includes('r')){
            symbolCount[3]+=i.qntd;
          }
          if(textos.includes('g')){
            symbolCount[4]+=i.qntd;
          }
          if(textos.includes('c')){
            symbolCount[5]+=i.qntd;
          }
          if(textos.includes('any')){
            symbolCount[0]+=i.qntd;
            symbolCount[1]+=i.qntd;
            symbolCount[2]+=i.qntd;
            symbolCount[3]+=i.qntd;
            symbolCount[4]+=i.qntd;
          }
        }

      }else{
        if(i.card.name.toLowerCase().includes('plains')){
          symbolCount[0]+=i.qntd;
        }
        if(i.card.name.toLowerCase().includes('island')){
          symbolCount[1]+=i.qntd;
        }
        if(i.card.name.toLowerCase().includes('swamp')){
          symbolCount[2]+=i.qntd;
        }
        if(i.card.name.toLowerCase().includes('mountain')){
          symbolCount[3]+=i.qntd;
        }
        if(i.card.name.toLowerCase().includes('forest')){
          symbolCount[4]+=i.qntd;
        }
        if(i.card.name.toLowerCase().includes('waste')){
          symbolCount[5]+=i.qntd;
        }
        console.log('symCont');
        console.log(symbolCount);
      }
    }// fim do for
    this.doughnutChartData = symbolCount;
    console.log(symbolCount);
  }

  public getPct():number {
    return this.pct;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}//fim da classe




