import { VarHoldService } from './../shared/var-hold.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  cardName: string;

  constructor( private varHold: VarHoldService ) { }

  ngOnInit() {
  }

  saveSearch( paraBuscar: string){
    this.varHold.$toSearch = paraBuscar;

    console.log(this.varHold.$toSearch);
  }

}
