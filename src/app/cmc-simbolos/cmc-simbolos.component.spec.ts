import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmcSimbolosComponent } from './cmc-simbolos.component';

describe('CmcSimbolosComponent', () => {
  let component: CmcSimbolosComponent;
  let fixture: ComponentFixture<CmcSimbolosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmcSimbolosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmcSimbolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
