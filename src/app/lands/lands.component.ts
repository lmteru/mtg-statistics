import { Color } from 'ng2-charts';
import { Http } from '@angular/http';
import { Component, OnInit, Input } from '@angular/core';

import { MagicDeck, MagicCard } from './../shared/MagicCard';

@Component({
  selector: 'app-lands',
  templateUrl: './lands.component.html',
  styleUrls: ['./lands.component.css']
})
export class LandsComponent implements OnInit {

  constructor( ) { }

  @Input( 'landsInput' ) landsInput: MagicDeck[];
  @Input( 'colorId' ) colorId: string;

  public ChartColors: Color[] = [ //'#ffff66','#0033cc','#000000','#ff0000','#00cc00'
    {
      backgroundColor: 'rgba(255, 255, 102, 0.5)',
      borderColor: 'rgba(255, 255, 102, 1)'
    },
    {
      backgroundColor: 'rgba(0, 51, 204, 0.5)',
      borderColor: 'rgba(0, 51, 204, 1)'
    },
    {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderColor: 'rgba(0, 0, 0, 1)'
    },
    {
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      borderColor: 'rgba(255, 0, 0, 1)'
    },
    {
      backgroundColor: 'rgba(0, 204, 0, 0.5)',
      borderColor: 'rgba(0, 204, 0, 1)'
    },
    {
      backgroundColor: 'rgba(250, 250, 250, 0.7)',
      borderColor: 'rgba(195, 195, 195, 1)'
    }
  ];

  // Doughnut
  public doughnutChartLabels:string[] = ['White', 'Blue', 'Black', 'Red', 'Green', 'Colorless'];
  public doughnutChartData:Array<number[]> = [];
  public doughnutChartType:string = 'polarArea';

  async ngOnInit() {
    this.Rodada();
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
      if( auxString.length>2 ) {
        asw.push(auxString);
      }
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
        aswOut=acumulador.toLowerCase();
        acumulador='';
      }
    }
    return( aswOut );
  }

  private async Rodada(){

    let textos: string;
    let lands: MagicDeck[] = [];
    let landAux: string[];

    let symbolCount: Array<number[]> =
      [
       [ 0, 0, 0, 0, 0, 0 ],
       [ 0, 0, 0, 0, 0, 0 ],
       [ 0, 0, 0, 0, 0, 0 ],
       [ 0, 0, 0, 0, 0, 0 ],
       [ 0, 0, 0, 0, 0, 0 ],
       [ 0, 0, 0, 0, 0, 0 ]
     ];

    lands = this.landsInput;

    for(let i of lands) {
      if(!i.card.type.toLowerCase().includes('basic') ) {
        textos = this.toRelevantText(i.card.text);

        if(textos != undefined) {
          if(textos.includes('w')){
            symbolCount[0][0]+=i.qntd;
          }
          if(textos.includes('u')){
            symbolCount[1][1]+=i.qntd;
          }
          if(textos.includes('b')){
            symbolCount[2][2]+=i.qntd;
          }
          if(textos.includes('r')){
            symbolCount[3][3]+=i.qntd;
          }
          if(textos.includes('g')){
            symbolCount[4][4]+=i.qntd;
          }
          if(textos.includes('c')){
            symbolCount[5][5]+=i.qntd;
          }
          if(textos.includes('any')){
            symbolCount[0][0]+=i.qntd;
            symbolCount[1][1]+=i.qntd;
            symbolCount[2][2]+=i.qntd;
            symbolCount[3][3]+=i.qntd;
            symbolCount[4][4]+=i.qntd;
          }
        }

      }else{
        if(i.card.name.toLowerCase().includes('plains')){
          symbolCount[0][0]+=i.qntd;
        }
        if(i.card.name.toLowerCase().includes('island')){
          symbolCount[1][1]+=i.qntd;
        }
        if(i.card.name.toLowerCase().includes('swamp')){
          symbolCount[2][2]+=i.qntd;
        }
        if(i.card.name.toLowerCase().includes('mountain')){
          symbolCount[3][3]+=i.qntd;
        }
        if(i.card.name.toLowerCase().includes('forest')){
          symbolCount[4][4]+=i.qntd;
        }
        if(i.card.name.toLowerCase().includes('waste')){
          symbolCount[5][5]+=i.qntd;
        }
      }//fim do else
    }// fim do for para cada land da rodada
    //serie de ifs para que no lands count nao apareca as cores que o comandante nao tem
    if(!this.colorId.toLowerCase().includes('w')){
      symbolCount[0][0]=0;
    }
    if(!this.colorId.toLowerCase().includes('u')){
      symbolCount[1][1]=0;
    }
    if(!this.colorId.toLowerCase().includes('b')){
      symbolCount[2][2]=0;
    }
    if(!this.colorId.toLowerCase().includes('r')){
      symbolCount[3][3]=0;
    }
    if(!this.colorId.toLowerCase().includes('g')){
      symbolCount[4][4]=0;
    }

    this.doughnutChartData = symbolCount;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}//fim da classe




