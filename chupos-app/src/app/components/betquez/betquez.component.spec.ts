import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetquezComponent } from './betquez.component';

describe('BetquezComponent', () => {
  let component: BetquezComponent;
  let fixture: ComponentFixture<BetquezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetquezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetquezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
