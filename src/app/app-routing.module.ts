import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { DeInteresComponent } from './de-interes/de-interes.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'de-interes', component: DeInteresComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
