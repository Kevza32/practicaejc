import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; //Sirve para importar el archivo donde estan configuradas las rutas 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // sirve para definir formularios en angular // reactive par formularios reactivos
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeInteresComponent } from './de-interes/de-interes.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NavbarLateralComponent } from './navbar-lateral/navbar-lateral.component';
import { BuscadorUnidadComponent } from './buscador-unidad/buscador-unidad.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    DeInteresComponent,
    NoticiasComponent,
    NavbarLateralComponent,
    BuscadorUnidadComponent
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
