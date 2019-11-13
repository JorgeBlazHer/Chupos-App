import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BetquezService } from 'src/app/service/betquez.service';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ApuestaPP, Persona } from 'src/app/model/apuesta';

@Component({
  selector: 'app-betquez-apuesta',
  templateUrl: './betquez-apuesta.component.html',
  styleUrls: ['./betquez-apuesta.component.css']
})
export class BetquezApuestaComponent implements OnInit {

  id: String;
  apuesta: ApuestaPP;
  apuestaForm: FormGroup;
  finForm: FormGroup;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private apiService: BetquezService,
    public fb: FormBuilder) {
      this.mainForm()
     }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apiService.getApuesta(this.id).subscribe(
      (res) => {
        this.apuesta = res;
        console.log(res);
      }, (error) => {
        console.log(error);
      });
  }


  mainForm() {
    this.finForm = this.fb.group({
      ganadorPor: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    })

    this.apuestaForm = this.fb.group({
      descripcion: ['', [Validators.required]],
      persona: ['', [Validators.required]]
    })
  }

  onSubmit(){
    this.apuesta.apuestas.push(new Persona(this.apuestaForm.value.persona,this.apuestaForm.value.descripcion));
  
    this.apiService.updateApuesta(this.apuesta._id, this.apuesta).subscribe(
      (res) => {
        this.mainForm();
        this.ngOnInit();

      }, (error) => {
        console.log(error);
      });
  }

}
