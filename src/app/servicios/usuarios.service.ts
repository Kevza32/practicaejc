import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //sirve para hacer peticiones http (get post put delete)
import { ServicioEncriptService } from './servicio-encript.service';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = "./assets/jsons/jsonUsuarios.json";
  private url2 = "http://190.146.64.16/coperdev/jsserver";
  private headers;
  private options;

  constructor(private http: HttpClient, private serviceEncript: ServicioEncriptService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded' //propiedad de httpClient para poder enviar json por la cabeceras
    });
    this.options = { headers: this.headers }
  }

  cargarTodosLosUsuarios() {
    return this.http.get(this.url);
  }

  LoguearApi(user: any) {
    const json = {
      "ServiceName": "SiwepService",
      "MethodHash": "com.siwep.bean.account.SesionTrabajo_validateSesionTrabajo_String_String_String_String_String_String",
      "ArgumentList": [
        user.authType,
        user.username,
        user.password,
        null,
        null,
        null
      ]
    }
    const data = JSON.stringify(json);
    return this.http.post(this.url2, data, this.options);
  }

}
