import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFldComponent } from './card-fld.component';

describe('CardFldComponent', () => {
  let component: CardFldComponent;
  let fixture: ComponentFixture<CardFldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
