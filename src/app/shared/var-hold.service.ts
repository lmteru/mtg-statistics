import { Injectable } from '@angular/core';

@Injectable()
export class VarHoldService {

  constructor() { }

  private toSearch: string = 'nissa';
  resultadoBusca:JSON[] = [];



    /**
     * Getter $toSearch
     * @return {string}
     */
	public get $toSearch(): string {
		return this.toSearch;
	}

    /**
     * Setter $toSearch
     * @param {string} value
     */
	public set $toSearch(value: string) {
		this.toSearch = value;
	}


}
