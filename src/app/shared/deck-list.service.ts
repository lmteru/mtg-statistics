import { async } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MagicCard, MagicDeck } from './MagicCard';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/map'

@Injectable()
export class DeckListService {

  comanderCard: MagicCard;
  resultSearch: MagicCard[];

  deckString: string[] = [];
  deckCard: MagicDeck[] = [];
  deckLands: MagicDeck[] = [];

  progressBar: number = 0;
  deckSaved: boolean = false;

  colorId='';

  constructor( private http:Http ) { }

  async consolidaLista() {
    let aux: MagicCard;
    let auxCard: MagicDeck;

    let contador: number = 0;
    let tam: number = this.deckString.length;

    for( let i of this.deckString ){

      if( !i.includes('LANDS') && !i.includes('CREATURES') && !i.includes('COMMANDER')
        && !i.includes('INSTANTS and SORC') && !i.includes('OTHER SPELLS') && i!='' ) {

        auxCard = await this.BuscaCarta(i) as MagicDeck;

        this.deckCard.push(auxCard);
        contador++;
        this.progressBar = Math.floor( (contador / tam) * 100 );
      } else {

        tam--;
      }
    }//fim do for

    this.arrumaDeck();

    if(this.deckString.length > 0)
      this.deckSaved = true;
  }//fim do metodo

  async BuscaCarta( toSearch: string ): Promise<MagicDeck> {
    let toReturn: MagicDeck = { qntd: 0, card:{} };
    let qntd: number;
    let aux: string [] = [];


    aux = toSearch.split(' ');
    toReturn.qntd = Number(aux[0]);

    aux = aux.slice(1);
    toSearch = aux.join(' ');

    let found = await this.http.get('https://api.magicthegathering.io/v1/cards?name=' + toSearch
    + '&layout=normal|split|flip|double-faced').toPromise();

    toReturn.card = found.json().cards[0];

    return toReturn;
  }


  private arrumaDeck() {

    //coloca o comandante na variavel
    this.comanderCard = this.deckCard[0].card;

    //tira o comandante do corpo do deck
    this.deckCard = this.deckCard.slice(1);

    //coloca as lands no vetor de lands
    for(let land of this.deckCard){
      if(land.card.type.toLowerCase().includes('land'))
        this.deckLands.push(land);
    }

    this.colorId = this.getColorId()
  }

  private getColorId(): string {
    let concat: string = '';
    if(this.comanderCard!=undefined)
      for (let i of this.comanderCard.colorIdentity){
        concat += i;
      }

    return concat
  }
}
