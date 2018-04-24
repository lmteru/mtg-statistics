import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustoCoresComponent } from './custo-cores';


describe('RadialGraphComponent', () => {
  let component: CustoCoresComponent;
  let fixture: ComponentFixture<CustoCoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustoCoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustoCoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
