import { Component, OnInit } from '@angular/core';
import { SeviceLocalStorageService } from '../servicios/sevice-local-storage.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  sesion:any;
  constructor( private serviceLS : SeviceLocalStorageService) { }

  ngOnInit(): void {
    this.sesion = this.serviceLS.getJsonValue('SesionUser');
  }

}
