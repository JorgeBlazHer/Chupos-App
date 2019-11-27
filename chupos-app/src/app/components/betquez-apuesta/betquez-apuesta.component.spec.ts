import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormArray } from "@angular/forms";

import { BetquezApuestaComponent } from './betquez-apuesta.component';
import { ApiService } from 'src/app/service/api.service';
import { BetquezService } from 'src/app/service/betquez.service';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BetquezApuestaComponent', () => {
  let component: BetquezApuestaComponent;
  let fixture: ComponentFixture<BetquezApuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetquezApuestaComponent ],
      imports: [
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      providers:[
        BetquezService
      ]
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
