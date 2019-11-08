import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import {HttpClientModule} from '@angular/common/http'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ApuestasComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ApuestasComponent
  ],
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
