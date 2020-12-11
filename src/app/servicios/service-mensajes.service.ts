import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMensajesService {

  private url = 'http://190.146.64.16/coperdev/jsserver';
  private headers;
  private options;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.options = { headers: this.headers }
  }

  public crearMensaje(formularioMensaje){
    const json = {
      "ServiceName": "SiwepService",
      "MethodHash": "com.siwep.bean.Mensajes_updateMensajes_com.siwep.bean.Mensajes",
      "ArgumentList": [
        {
          "DataBeanProperties": {
            "IDMensajes": formularioMensaje.IDMensajes,
            "Mensajes": formularioMensaje.Mensajes,
            "FechaNotifica": null,
            "IDFuncionario": formularioMensaje.IDFuncionario
          },
          "DataBeanName": "com.siwep.bean.Mensajes"
        }
      ]
    };
    const data = JSON.stringify(json);
    return this.http.post(this.url, data, this.options);
  }

  public eliminarMensaje(formularioMensaje){
    const json = {
      "ServiceName":"SiwepService",
      "MethodHash":"boolean_deleteMensajes_Number",
      "ArgumentList":[
        formularioMensaje.IDMensajes
      ]
    };
    const data = JSON.stringify(json);
    return this.http.post(this.url, data, this.options);
  }

  public consultarTodosMensajes(IDFuncionario){
    const jsonConsulta = {
      "ServiceName":"SiwepService",
      "MethodHash":"java.util.List_getMensajesCatalogPorPropiedad_String_Object_Number",
      "ArgumentList":[
        "IDFuncionario",
        IDFuncionario,
        null
      ]
    };
    const data = JSON.stringify(jsonConsulta);
    return this.http.post(this.url, data, this.options);
  }
}
