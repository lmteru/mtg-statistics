import { Injectable } from '@angular/core';

@Injectable()
export class VarHoldService {

  constructor() { }

  private toSearch: string = 'nissa';
  resultadoBusca:JSON[] = [];

	public get $toSearch(): string {
		return this.toSearch;
	}

	public set $toSearch(value: string) {
		this.toSearch = value;
	}


}
