import { DeckListService } from './shared/deck-list.service';
import { VarHoldService } from './shared/var-hold.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CardFldComponent } from './card-fld/card-fld.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { DecklistInputComponent } from './decklist-input/decklist-input.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    WrapperComponent,
    CardFldComponent,
    CardWrapperComponent,
    DecklistInputComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    VarHoldService,
    DeckListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
