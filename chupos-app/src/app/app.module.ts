import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import {HttpClientModule} from '@angular/common/http'
import { ApiService } from './service/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BetquezComponent } from './components/betquez/betquez.component';
import { BetquezService } from './service/betquez.service';
import { BetquezApuestaComponent } from './components/betquez-apuesta/betquez-apuesta.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ApuestasComponent},
  { path: 'betquez', component: BetquezComponent},
  { path: 'betquez/:id', component: BetquezApuestaComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ApuestasComponent,
    BetquezComponent,
    BetquezApuestaComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, BetquezService],
  bootstrap: [AppComponent]
})
export class AppModule { }
