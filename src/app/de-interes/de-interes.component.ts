import { Component, OnInit } from '@angular/core';
import { SeviceLocalStorageService } from '../servicios/sevice-local-storage.service';

@Component({
  selector: 'app-de-interes',
  templateUrl: './de-interes.component.html',
  styleUrls: ['./de-interes.component.css']
})
export class DeInteresComponent implements OnInit {
  sesion:any;
  constructor(private servicioLS : SeviceLocalStorageService) { }

  ngOnInit(): void {
  this.sesion=this.servicioLS.getJsonValue('SesionUser');
  }

}
