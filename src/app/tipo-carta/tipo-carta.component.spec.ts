import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCartaComponent } from './tipo-carta.component';

describe('TipoCartaComponent', () => {
  let component: TipoCartaComponent;
  let fixture: ComponentFixture<TipoCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
