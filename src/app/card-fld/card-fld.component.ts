import { MagicCard } from './../shared/MagicCard';
import { VarHoldService } from './../shared/var-hold.service';
import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-card-fld',
  templateUrl: './card-fld.component.html',
  styleUrls: ['./card-fld.component.css']
})
export class CardFldComponent implements OnInit {
  //https://api.magicthegathering.io/v1/

  constructor( private varHold: VarHoldService ,private http: Http ) { }

  paraBusca: string;
  resultSearch:MagicCard[];

  ngOnInit() {
  }

  buscaCarta (){
    this.paraBusca = this.varHold.$toSearch;
    console.log(this.paraBusca);
    this.http.get('https://api.magicthegathering.io/v1/cards?name=' + this.paraBusca)
    .map( m => m.json())
    .subscribe(
      param => {
        this.resultSearch = [];
        this.varHold.resultadoBusca = param ;
        let aux: MagicCard[] = [];

        this.resultSearch = param.cards as MagicCard[];
      }
    );
  }

}
