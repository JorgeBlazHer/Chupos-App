import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetquezComponent } from './betquez.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BetquezService } from 'src/app/service/betquez.service';

describe('BetquezComponent', () => {
  let component: BetquezComponent;
  let fixture: ComponentFixture<BetquezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetquezComponent ],
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
    fixture = TestBed.createComponent(BetquezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
