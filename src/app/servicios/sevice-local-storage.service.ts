import { Injectable } from '@angular/core';
import { ServicioEncriptService } from './servicio-encript.service';

@Injectable({
  providedIn: 'root'
})
export class SeviceLocalStorageService {

  constructor(private serviceEncript : ServicioEncriptService) { }

  setJsonValue(key: string, value: any) {
    this.serviceEncript.secureStorage.setItem(key, value);
  }
  getJsonValue(key: string) {
    return this.serviceEncript.secureStorage.getItem(key);
  }
  clearToken() {
    return this.serviceEncript.secureStorage.clear();
  }
}
