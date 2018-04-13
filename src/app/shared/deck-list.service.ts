import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { MagicCard } from './MagicCard';
import 'rxjs/add/operator/map'

@Injectable()
export class DeckListService {

  private commanderStr: string;
  private comanderCard: MagicCard;

  private deckString: string[] = [];
  private deckCard :{
    qtd: Number,
    card: MagicCard
  } [] = [];

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

	public get $deckString(): string[] {
		return this.deckString;
	}

	public set $deckString(value: string[]) {
		this.deckString = value;
	}

	public get $deckCard(): {
    qtd: Number,
    card: MagicCard } []
  {
		return this.deckCard;
	}

	public set $deckCard(value: {
    qtd: Number,
    card: MagicCard } [])
  {
		this.deckCard = value;
  }

  public consolidaComandante(){
    this.commanderStr = this.commanderStr.split('').slice(2).join('');

    this.http.get('https://api.magicthegathering.io/v1/cards?name=' + this.commanderStr)
    .map( m => m.json())
    .subscribe(
      param => {
        let aux: MagicCard[] = [];

        aux = param.cards as MagicCard[];
        this.comanderCard = aux[0];
       }
    );
    console.log(this.comanderCard);
  }

  public consolidaLista() {
    let aux: MagicCard;
    let auxCard: {
      qtd: Number,
      card: MagicCard } = {
        qtd: 0,
        card: {}
      };

    let contador = 0;

    for( let i of this.deckString ){

      if( !i.includes('LANDS') && !i.includes('CREATURES')
        && !i.includes('INSTANTS and SORC') && !i.includes('OTHER SPELLS') ) {

        auxCard.qtd = Number(i.split(' ')[0]);

        i = i.split('').slice(2).join('');

        this.http.get('https://api.magicthegathering.io/v1/cards?name=' + i)
         .map( m => m.json())
         .subscribe(
           param => {
             let aux: MagicCard[] = [];

             aux = param.cards as MagicCard[];

             auxCard.card = aux[0];
           }
         );

         this.deckCard.push(auxCard);
         console.log(this.deckCard[contador]);
         contador++;
      }
    }



  }


}
