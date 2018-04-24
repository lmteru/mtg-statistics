import { Component, OnInit, Input } from '@angular/core';
import { MagicCard } from '../shared/MagicCard';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.css']
})
export class CardWrapperComponent implements OnInit {

  @Input() card: MagicCard;

  cardColor: string;

  constructor() { }

  ngOnInit() {
    // console.log(this.card);
    if(this.card.colors != undefined){

      if(this.card.colors.length==1){
        this.cardColor = this.card.colors[0];
      }else{
        this.cardColor = "Moccasin";//indicador de carta multicolorida
      }
    }else{

      this.cardColor = "Oldlace";//indicador de terreno
    }
  }

  getColor(){
    if(this.cardColor=="White")
      this.cardColor="Khaki";

    if(this.cardColor=="White")
      this.cardColor="Grey";

    return this.cardColor;
  }

}
