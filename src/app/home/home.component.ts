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
  sesion: any;
  vista = 1;
  disabledButton: boolean = true;
  listaMensajes = [];

  beanMensaje = {
    IDMensajes: null,
    Mensajes: '',
    IDFuncionario: 0
  }
  constructor(private _SlocalStorage: SeviceLocalStorageService, private mensajeService: ServiceMensajesService) {

  }

  ngOnInit(): void {
    this.sesion = this._SlocalStorage.getJsonValue('SesionUser');
    console.log(this.sesion);
    this.beanMensaje.IDFuncionario = this.sesion.CONSECUTIVO;
    this.listaServiciosxFuncionario();
  }
  clicknav(id) {
    this.vista = id
    if (this.vista == 2) {
      this.disabledButton = false;
    } else {
      this.disabledButton = true;
    }
  }

  public listaServiciosxFuncionario() {
    this.mensajeService.consultarTodosMensajes(this.sesion.CONSECUTIVO).subscribe(
      (resp: any) => {
        if (resp.DataBeanProperties.ObjectValue) {
          this.listaMensajes = resp.DataBeanProperties.ObjectValue;
        } else {
          alert("El usuario no tiene mensajes");
        }
      }
    );
  }
  public guardarMensaje() {
    this.mensajeService.crearMensaje(this.beanMensaje).subscribe(
      (resp: any) => {
        if (resp.DataBeanProperties.ObjectValue) {
          this.beanMensaje.IDMensajes == null ? alert("Se creo el mensaje") : alert("Se edito el mensaje");
          this.listaServiciosxFuncionario();
          this.beanMensaje = {
            IDMensajes: null,
            Mensajes: '',
            IDFuncionario: 0
          }
        } else {
          alert("No se pudo crear el mensaje");
        }
      }
    );
  }
  public eliminarMensaje(beanM) {
    this.beanMensaje = beanM;
    this.mensajeService.eliminarMensaje(this.beanMensaje).subscribe(
      (resp: any) => {
        if (resp.DataBeanProperties.ObjectValue) {
          alert("El mensaje se elimino correctamente");
          this.listaServiciosxFuncionario();
          this.beanMensaje = {
            IDMensajes: null,
            Mensajes: '',
            IDFuncionario: 0
          }
        } else {
          alert("El mensaje no se pudo eliminar");
        }
      }
    );
  }
  public editar(bean){
    this.beanMensaje = bean;
    console.log(this.beanMensaje);
    
  }
}
