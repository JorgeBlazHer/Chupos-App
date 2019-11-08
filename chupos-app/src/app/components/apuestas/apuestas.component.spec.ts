import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuestasComponent } from './apuestas.component';

describe('ApuestasComponent', () => {
  let component: ApuestasComponent;
  let fixture: ComponentFixture<ApuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
