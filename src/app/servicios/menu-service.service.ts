import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  public options;
  public headers;
  constructor(private http : HttpClient) { }

  private url = "./assets/jsons/jsonMenu.json";

  public cargarMenu(){
    return this.http.get(this.url);
  }
}

