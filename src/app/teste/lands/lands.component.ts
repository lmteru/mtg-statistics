import { Http } from '@angular/http';
import { MagicDeck, MagicCard } from './../../shared/MagicCard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lands',
  templateUrl: './lands.component.html',
  styleUrls: ['./lands.component.css']
})
export class LandsComponent implements OnInit {

  constructor( private http: Http ) { }

  txtOut: string = '';
  landsIn: string = '';
  k = false;

  async ngOnInit() { }

  async BuscaLandsRnd( ): Promise<MagicCard[]> {
    let toReturn: MagicCard[];
    let qntd: number;

    let pg: number = Math.floor(Math.random() * 20);

    const found = await this.http.get('https://api.magicthegathering.io/v1/cards?types=Land&page=' + pg).toPromise();

    toReturn = found.json().cards as MagicCard[];

    return toReturn;
  }

  async BuscaLand( toSearch: string ): Promise<MagicCard> {
    let toReturn: MagicCard;
    let qntd: number;
    let aux: string [] = toSearch.split(' ');

    aux = aux.slice(1);
    toSearch = aux.join(' ');

    let found = await this.http.get('https://api.magicthegathering.io/v1/cards?name=' + toSearch).toPromise();

    toReturn = found.json().cards[0];

    return toReturn;
  }

  public toRelevantText( originalText: string ): string[]{

    let auxString: string;
    let asw: string[] = [];

  while(originalText.includes('Add') && originalText.includes('to your mana pool')) {

      auxString = originalText.slice( originalText.toLowerCase().indexOf('add') );
      auxString = auxString.slice( 0 , auxString.toLowerCase().indexOf('.') + 1 );

      originalText = originalText.slice( originalText.indexOf( auxString ) + auxString.length );

      asw.push(auxString);

    }

    return( asw );
  }

  public async Rodada(){

    let textos: string[];
    let landsDaRodada: MagicCard[] = [];
    let landAux: string[];
    this.k=!this.k;
    // landsDaRodada = await this.BuscaLandsRnd();

    landAux = this.landsIn.split('\n');
    console.log(landAux)

    for(let i of landAux){
      landsDaRodada.push( await this.BuscaLand( i ) );
    }
    console.log(landsDaRodada)

    for(let i of landsDaRodada){
      if(i.text!='' && i.text!= undefined){

        textos = this.toRelevantText(i.text);

        for(let j of textos)
          this.txtOut += j + '   ||   ';

      }else{
        console.log("land " + i.name + " não tem texto");
      }
    }

  }


}


