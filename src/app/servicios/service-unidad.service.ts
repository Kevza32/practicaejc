import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceUnidadService {
  private headers;
  private options;
  url = "http://190.146.64.16/coperdev/jsserver";
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded' //propiedad de httpClient para poder enviar json por la cabeceras
    });
    this.options = { headers: this.headers }
  }
  buscarUnidadxSigla(sigla) {
    const json = {
      "ServiceName": "SiwepService",
      "MethodHash": "com.mdn.bean.siath.UnidadMilitar_getUnidadMilitarByFilter_Number_String",
      "ArgumentList": [
        3,
        sigla
      ]
    };
    const data = JSON.stringify(json);
    return this.http.post(this.url, data, this.options);
  }
}
