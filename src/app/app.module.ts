import { DeckListService } from './shared/deck-list.service';
import { VarHoldService } from './shared/var-hold.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CardFldComponent } from './card-fld/card-fld.component';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { DecklistInputComponent } from './decklist-input/decklist-input.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { routing } from './app.routing';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DeckViewComponent } from './deck-view/deck-view.component';
import { StatisticsService } from './shared/statistics.service';
import { ShowStatisticsComponent } from './show-statistics/show-statistics.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ManaCurveComponent } from './mana-curve/mana-curve.component';
import { RadialGraphComponent } from './radial-graph/radial-graph.component';
import { TipoCartaComponent } from './tipo-carta/tipo-carta.component';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    WrapperComponent,
    CardFldComponent,
    CardWrapperComponent,
    DecklistInputComponent,
    NavBarComponent,
    ProgressBarComponent,
    DeckViewComponent,
    ShowStatisticsComponent,
    HomePageComponent,
    ManaCurveComponent,
    RadialGraphComponent,
    TipoCartaComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule
  ],
  providers: [
    VarHoldService,
    DeckListService,
    StatisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
