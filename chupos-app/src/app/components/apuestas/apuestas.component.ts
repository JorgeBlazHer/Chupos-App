import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ApiService } from './../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {


  apuestaForm: FormGroup;
  cerrarApuesta: FormGroup;

  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService) {
      this.mainForm();
  }

  ngOnInit() {
  }


  mainForm() {
    this.cerrarApuesta = this.fb.group({
      passCerrar: ['', [Validators.required]],
      ganador: ['', [Validators.required]]
    });
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
    else if(this.apuestaForm.value.pass!=this.apuestaForm.value.pass2){
      alert("Contraseñas iguales!!!!");
    }
    else {
      this.apiService.createApuesta(this.apuestaForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          alert("Apuesta creada");
          this.ngZone.run(() => this.router.navigateByUrl('/'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
