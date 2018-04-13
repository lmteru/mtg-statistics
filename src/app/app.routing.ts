import { DecklistInputComponent } from './decklist-input/decklist-input.component';
import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

const appRoutes: Routes = [
  {
    path: 'buscaNome',
    component: TelaInicialComponent
  },
  {
    path: 'adiconaDeck',
    component: DecklistInputComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
