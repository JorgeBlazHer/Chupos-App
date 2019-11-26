import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ApiService } from './../../service/api.service';


@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {


  apuestaForm: FormGroup;
  apuestasAbiertas: Object;
  apuestasCerradas: Object;


  constructor(public fb: FormBuilder,
    private apiService: ApiService) {

  }

  ngOnInit() {
    this.mainForm();
    this.apiService.getApuestasActivas().subscribe(
      (res) => {
        this.apuestasAbiertas = res;


      }, (error) => {
        console.log(error);
      });


    this.apiService.getApuestasFinalizadas().subscribe(
      (res) => {
        this.apuestasCerradas = res;
      }, (error) => {
        console.log(error);
      });
  }

  cerrar(i) {
    this.apiService.validarPass(this.apuestasAbiertas[i]._id, this.apuestasAbiertas[i].passCerrar).subscribe(
      (res) => {
        this.apuestasAbiertas[i].fin = true;
        this.apiService.updateApuesta(this.apuestasAbiertas[i]._id, this.apuestasAbiertas[i]).subscribe(
          (res) => {
            this.apuestasAbiertas = res;
            this.ngOnInit();

          }, (error) => {
            console.log(error);
          });
        this.apuestasAbiertas = res;
        this.ngOnInit();

      }, (error) => {
        console.log(error);
        alert("Contraseña mal.")
      });
  }

  pagar(i) {
    this.apiService.validarPass(this.apuestasAbiertas[i]._id, this.apuestasAbiertas[i].passCerrar).subscribe(
      (res) => {
        this.apuestasCerradas[i].pagada = true;
        this.apiService.updateApuesta(this.apuestasCerradas[i]._id, this.apuestasCerradas[i]).subscribe(
          (res) => {
            this.ngOnInit();

          }, (error) => {
            console.log(error);
          });
        this.apuestasAbiertas = res;
        this.ngOnInit();

      }, (error) => {
        console.log(error);
        alert("Contraseña mal.")
      });
  }


  mainForm() {
    this.apuestaForm = this.fb.group({
      actor1: ['', [Validators.required]],
      ganaActor1: [''],
      actor2: ['', [Validators.required]],
      ganaActor2: [''],
      descripcion: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      pass2: ['', [Validators.required]]
    })
  }

  esValido() {
    return !this.apuestaForm.controls.actor1.invalid &&
      !this.apuestaForm.controls.actor2.invalid &&
      !this.apuestaForm.controls.descripcion.invalid &&
      !this.apuestaForm.controls.fechaFin.invalid &&
      !this.apuestaForm.controls.pass.invalid &&
      !this.apuestaForm.controls.pass2.invalid;
  }
  
  contrasenasIguales() {
    return this.apuestaForm.controls.pass.value === this.apuestaForm.controls.pass2.value;
  }

  onSubmit() {
    if (!this.apuestaForm.valid) {
      return false;
    }
    else if (this.apuestaForm.value.pass != this.apuestaForm.value.pass2) {
      alert("Contraseñas iguales!!!!");
    }
    else {
      this.apiService.createApuesta(this.apuestaForm.value).subscribe(
        (res) => {
          this.ngOnInit();
        }, (error) => {
          console.log(error);
        });
    }
  }
}
