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
    if (this.apuestasAbiertas[i].passCerrar === this.apuestasAbiertas[i].pass) {
      this.apuestasAbiertas[i].fin = true;
      this.apiService.updateApuesta(this.apuestasAbiertas[i]._id, this.apuestasAbiertas[i]).subscribe(
        (res) => {
          this.apuestasAbiertas = res;
          this.ngOnInit();

        }, (error) => {
          console.log(error);
        });

    }
    else{
      alert("Contraseña mal.")
    }

  }

  pagar(i) {
    if (this.apuestasCerradas[i].passPagar === this.apuestasCerradas[i].pass) {
      this.apuestasCerradas[i].pagada = true;
      this.apiService.updateApuesta(this.apuestasCerradas[i]._id, this.apuestasCerradas[i]).subscribe(
        (res) => {
          this.ngOnInit();

        }, (error) => {
          console.log(error);
        });

    }
    else{
      alert("Contraseña mal.")
    }

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

  get myForm() {
    return this.apuestaForm.controls;
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
          console.log('Employee successfully created!')

          this.ngOnInit();
        }, (error) => {
          console.log(error);
        });
    }
  }
}
