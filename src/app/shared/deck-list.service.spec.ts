import { TestBed, inject } from '@angular/core/testing';

import { DeckListService } from './deck-list.service';

describe('DeckListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeckListService]
    });
  });

  it('should be created', inject([DeckListService], (service: DeckListService) => {
    expect(service).toBeTruthy();
  }));
});
