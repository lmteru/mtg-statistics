import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecklistInputComponent } from './decklist-input.component';

describe('DecklistInputComponent', () => {
  let component: DecklistInputComponent;
  let fixture: ComponentFixture<DecklistInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecklistInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecklistInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
