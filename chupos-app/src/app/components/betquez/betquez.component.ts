import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { BetquezService } from './../../service/betquez.service';


@Component({
  selector: 'app-betquez',
  templateUrl: './betquez.component.html',
  styleUrls: ['./betquez.component.css']
})
export class BetquezComponent implements OnInit {

  apuestaGForm: FormGroup;
  apuestasAbiertas: Object;


  constructor(public fb: FormBuilder,
    private apiService: BetquezService) { }

  ngOnInit() {
    this.mainForm();
    this.apiService.getApuestas().subscribe(
      (res) => {
        this.apuestasAbiertas = res;
      }, (error) => {
        console.log(error);
      });
  }


  mainForm() {

    this.apuestaGForm = this.fb.group({
      descripcion: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      pass2: ['', [Validators.required]],
      apuestas: [[]]
    })
  }


  esValido() {
    return !this.apuestaGForm.controls.descripcion.invalid &&
      !this.apuestaGForm.controls.fechaFin.invalid &&
      !this.apuestaGForm.controls.pass.invalid &&
      !this.apuestaGForm.controls.pass2.invalid;
  }

  contrasenasIguales() {
    return this.apuestaGForm.controls.pass.value === this.apuestaGForm.controls.pass2.value;
  }

  onSubmit() {
    if (!this.apuestaGForm.valid) {
      return false;
    }
    else if (this.apuestaGForm.value.pass != this.apuestaGForm.value.pass2) {
      alert("Contraseñas iguales!!!!");
    }
    else {
      this.apiService.createApuesta(this.apuestaGForm.value).subscribe(
        (res) => {
          this.ngOnInit();
        }, (error) => {
          console.log(error);
        });
    }
  }

}