import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; //Sirve para importar el archivo donde estan configuradas las rutas 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // sirve para definir formularios en angular // reactive par formularios reactivos
import { HttpClientModule } from '@angular/common/http'; // llamamos la importación de manera global



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule //Usamos la importación
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
