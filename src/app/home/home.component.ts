import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { ServiceMensajesService } from '../servicios/service-mensajes.service';
import { SeviceLocalStorageService } from '../servicios/sevice-local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sesion:any;
  vista=1;
  disabledButton: boolean = true;
  listaMensajes = [];

  beanMensaje={
    IDMensaje: null,
    Mensajes: '',
    IDFuncionario: 0 
  }
  constructor(private _SlocalStorage: SeviceLocalStorageService, private mensajeService: ServiceMensajesService) {

  }

  ngOnInit(): void {
    this.sesion =  this._SlocalStorage.getJsonValue('SesionUser');
    console.log(this.sesion);
    this.beanMensaje.IDFuncionario = this.sesion.CONSECUTIVO; 
    this.listaServiciosxFuncionario();
  }
  clicknav(id){
    this.vista = id
    if (this.vista == 2){
      this.disabledButton = false;
    }else{
      this.disabledButton = true;
    }
  }

  public listaServiciosxFuncionario(){
    this.mensajeService.consultarTodosMensajes(this.sesion.CONSECUTIVO).subscribe(
      (resp:any)=>{
        if(resp.DataBeanProperties.ObjectValue){
          this.listaMensajes = resp.DataBeanProperties.ObjectValue;
        }else{
          alert("El usuario no tiene mensajes");
        }
      }
    );
  }
}
