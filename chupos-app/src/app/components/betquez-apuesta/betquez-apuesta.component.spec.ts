import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetquezApuestaComponent } from './betquez-apuesta.component';

describe('BetquezApuestaComponent', () => {
  let component: BetquezApuestaComponent;
  let fixture: ComponentFixture<BetquezApuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetquezApuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetquezApuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
