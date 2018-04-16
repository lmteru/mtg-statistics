import { async } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MagicCard, MagicDeck } from './MagicCard';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/map'

@Injectable()
export class DeckListService {

  private commanderStr: string;
  private comanderCard: MagicCard;
  resultSearch: MagicCard[];

  deckString: string[] = [];
  deckCard: MagicDeck[] = [];

  constructor( private http:Http ) { }

	public get $commanderStr(): string {
		return this.commanderStr;
	}

	public set $commanderStr(value: string) {
		this.commanderStr = value;
	}

	public get $comanderCard(): MagicCard {
		return this.comanderCard;
	}

	public set $comanderCard(value: MagicCard) {
		this.comanderCard = value;
	}

  async consolidaLista() {
    let aux: MagicCard;
    let auxCard: MagicDeck;

    let contador = 0;

    for( let i of this.deckString ){

      if( !i.includes('LANDS') && !i.includes('CREATURES') && !i.includes('COMMANDER')
        && !i.includes('INSTANTS and SORC') && !i.includes('OTHER SPELLS') ) {

        auxCard = await this.BuscaCarta(i) as MagicDeck;
        console.log(auxCard);

      }//fim do if
    }//fim do for

  }//fim do metodo

  async BuscaCarta( toSearch: string ): Promise<MagicDeck> {
    let toReturn: MagicDeck = { qntd: 0, card:{} };
    let qntd: number;
    let aux: string [] = [];


    aux = toSearch.split(' ');
    toReturn.qntd = Number(aux[0]);

    aux = aux.slice(1);
    toSearch = aux.join(' ');

    let found = await this.http.get('https://api.magicthegathering.io/v1/cards?name=' + toSearch).toPromise();

    toReturn.card = found.json().cards[0];

    // console.log(toReturn.card);

    return toReturn;
  }
}
