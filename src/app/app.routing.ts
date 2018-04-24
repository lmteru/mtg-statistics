import { HomePageComponent } from './home-page/home-page.component';
import { DeckViewComponent } from './deck-view/deck-view.component';
import { DecklistInputComponent } from './decklist-input/decklist-input.component';
import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { ShowStatisticsComponent } from './show-statistics/show-statistics.component';
import { LandsComponent } from './lands/lands.component';

const appRoutes: Routes = [
  {
    path: 'buscaNome',
    component: TelaInicialComponent
  },
  {
    path: 'adiconaDeck',
    component: DecklistInputComponent
  },
  {
    path: 'deckView',
    component: DeckViewComponent
  },
  {
    path: 'deckStatistics',
    component: ShowStatisticsComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'TestaLands',
    component: LandsComponent
  },
  {
    path: '**',
    component: HomePageComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
