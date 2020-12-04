import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //sirve para hacer peticiones http (get post put delete)
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = "./assets/jsons/jsonUsuarios.json";
  private headers;
  private options;

  constructor(private http: HttpClient) {
 
    // this.options = { headers: this.headers }
  }

  cargarTodosLosUsuarios() {
    return this.http.get(this.url);
  }
}








  //private url2 = "http://190.146.64.16/coperdev/jsserver"; 
  // this.headers = new HttpHeaders({
  //   'Content-Type': 'application/x-www-form-urlencoded' //propiedad de httpClient para poder enviar json por la cabeceras
  // });
  // this.options = { headers: this.headers }
  // loguin(bean){
  //   const dataObj = {
  //     "ServiceName":"SiwepService",
  //     "MethodHash":"com.siwep.bean.account.SesionTrabajo_validateSesionTrabajo_String_String_String_String_String_String",
  //     "ArgumentList":[
  //         bean.authType,
  //         bean.username,
  //         bean.password,
  //         bean.hostname,
  //         bean.ipAddress,
  //         bean.macAddress
  //     ]
  //   };
  //   const data = JSON.stringify(dataObj);
  //   console.log(data);
  //   return this.http.post(this.url2, data);
  // }
